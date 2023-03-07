import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { httpStatusCodes, httpStatusMessages } from "../shared/http-status-code";
import { response } from "../utils/http-response";
import { pick } from "../utils/pick";

export const dtoValidator = (schema: {}) => (req: Request, res: Response, next: NextFunction) => {
	const validSchema = pick(schema, ["params", "query", "body"]);
	const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" } })
    .validate(object);

	if (error) {
		let errorMessage: string = '';
		for (const err of error.details) {
			errorMessage += " [ " + err.path.join(" > ") + err.message.slice(err.message.lastIndexOf('"') + 1) + " ] ";
		}
        return res.status(httpStatusCodes.BAD_REQUEST).json(response(httpStatusCodes.BAD_REQUEST, httpStatusMessages.BAD_REQUEST, null, errorMessage));
	}
	Object.assign(req, value);
	return next();
};