import { NextFunction, Request, Response } from "express";
import { userStatus } from "../entities/user/enums/user-status.enum";
import { MoreThan } from "typeorm";
import {postgres} from "../database/postgres";
import { UserSession } from "../entities/user/models/user-session.model";
import { User } from "../entities/user/models/user.model";
import { httpStatusCodes, httpStatusMessages } from "../shared/http-status-code";
import { role } from "../shared/roles.enum";
import { BaseError } from "../utils/error-handler";
import { response } from "../utils/http-response";
import { jwtVerify } from "../utils/jwt";

const userAuth = (userType: string, tokenType: string) => async (req: Request | any, res: Response, next: NextFunction) => {
	try {
		/* Check token existence */
		let authorization: string | null = req?.headers?.authorization ?? null;
		if (!authorization) throw new BaseError(httpStatusMessages.UNAUTHORIZED, httpStatusCodes.UNAUTHORIZED, httpStatusMessages.UNAUTHORIZED, true);

		const tokenArray: string[] | undefined = authorization?.split(" ");
		if (!tokenArray || tokenArray[0] != "Bearer" || !tokenArray[1])
        throw new BaseError(httpStatusMessages.UNAUTHORIZED, httpStatusCodes.UNAUTHORIZED, httpStatusMessages.UNAUTHORIZED, true);

		let token: string = tokenArray[1];

		/* Check token payload */
		let payload: any = null;

		try {
			payload = jwtVerify(token, null, userType);

			if (!payload?.id || userType !== payload.userType || tokenType !== payload.tokenType) {
				throw new BaseError(httpStatusMessages.UNAUTHORIZED, httpStatusCodes.UNAUTHORIZED, httpStatusMessages.UNAUTHORIZED, true)
			};
		} catch (error: any) {
			return res.status(error?.status || httpStatusCodes.INTERNAL_SERVER)
			.json(response(error?.status || httpStatusCodes.INTERNAL_SERVER, error?.name || httpStatusMessages.INTERNAL_SERVER, null, error));
		};

		let user: any = null;
		let sessionModel: any;
		let session: any;

		/* user */
		if (userType == role.USER) {
			user = await postgres.getRepository(User).findOneBy({id: payload.id});
			if(user.status === userStatus.BLOCK) {
				throw new BaseError(httpStatusMessages.FORBIDDEN, httpStatusCodes.FORBIDDEN, 'You are blocked!', true)
			};
			if(user.status === userStatus.INACTIVE) {
				throw new BaseError(httpStatusMessages.FORBIDDEN, httpStatusCodes.FORBIDDEN, 'You are inactive!', true)
			};

			sessionModel = postgres.getRepository(UserSession);
		}

		// /* super admin */
		// if (userType == role.SUPER_ADMIN) {
		// 	user = await dataSource.getRepository(Admin).findOneBy({id: payload.id, role: adminType.SUPER_ADMIN});
		// 	sessionModel = dataSource.getRepository(AdminSession);
		// }

		if (!user){
			throw new BaseError(httpStatusMessages.UNAUTHORIZED, httpStatusCodes.UNAUTHORIZED, 'User not found, unauthorized!', true)
		};

		if (tokenType == "refresh"){
			session = await sessionModel?.findOneBy({
				refreshToken: token, refreshExpiresAt: MoreThan(new Date())
			});
		}else{
			session = await sessionModel?.findOneBy({
				accessToken: token, accessExpiresAt: MoreThan(new Date())
			});
		}
		if (!session){
			throw new BaseError(httpStatusMessages.UNAUTHORIZED, httpStatusCodes.UNAUTHORIZED, httpStatusMessages.UNAUTHORIZED, true)
		};

		req.sessionEntity = session;
		req.userEntity = user;

		next();
	} catch (error: any) {
		return res.status(error?.status || httpStatusCodes.INTERNAL_SERVER)
        .json(response(error?.status || httpStatusCodes.INTERNAL_SERVER, error?.name || httpStatusMessages.INTERNAL_SERVER, null, error));
	}
};

export default {
	userAuthMiddleware: userAuth(role.USER, "access"),
	userAuthRefreshMiddleware: userAuth(role.USER, "refresh"),
};