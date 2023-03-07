import JWT from 'jsonwebtoken';
import { role } from '../shared/roles.enum';
import config from '../config';

export const jwtGenerate = (payload: {}, secret: string, expiresIn: string, userType: string): string => {
	try {
		if (userType === role.USER) {
			secret = config.AUTHENTICATION.USER_SECRET;
		} else {
			secret = config.AUTHENTICATION.PUBLIC_SECRET;
		}
		return JWT.sign(payload, secret, { expiresIn: expiresIn });
	} catch (e) {
		return null;
	}
}

export const jwtVerify = (token: string, secret: string, userType: string) => {
	try {
		if (userType == role.USER) {
			secret = config.AUTHENTICATION.USER_SECRET
		} else {
			secret = config.AUTHENTICATION.PUBLIC_SECRET
		};
		const verified = JWT.verify(token, secret, { complete: true });
		return verified?.payload ?? null;
	} catch (e) {
		return null;
	}
}

export class Token {
	constructor(readonly userId: string, readonly userType: string) { }

	private date: Date = new Date();
	private secret: string = config.AUTHENTICATION.USER_SECRET;
	private refreshExpiry: string = config.AUTHENTICATION.USER_REFRESH_EXPIRE;
	private accessExpiry: string = config.AUTHENTICATION.USER_ACCESS_EXPIRE;
	public accessExpiresAt: any = +this.date + +this.accessExpiry * 1000;
	public refreshExpiresAt: any = +this.date + +this.refreshExpiry * 1000;

	generateRefresh() {
		return jwtGenerate(
			{
				id: this.userId,
				userType: this.userType,
				tokenType: "refresh",
				expiresAt: this.refreshExpiresAt,
			},
			this.secret,
			this.refreshExpiry,
			this.userType,
		);
	}

	generateAccess() {
		return jwtGenerate(
			{
				id: this.userId,
				userType: this.userType,
				tokenType: "access",
				expiresAt: this.accessExpiresAt,
			},
			this.secret,
			this.accessExpiry,
			this.userType,
		);
	}
}