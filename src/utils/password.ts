import * as bcrypt from 'bcrypt';

export const generatePass = async (password: string) => {
	const salt = await bcrypt.genSalt();
	const hash = await bcrypt.hash(password, salt);
	return { password, salt, hash };
};

export const validatePass = async (password: string, salt: string, hash: string): Promise<boolean> => {
	try {
		const _hash = await bcrypt.hash(password, salt);
		if (hash === _hash) return true;
		else return false;
	} catch (e) {
		return false;
	}
};

export const testRegex = (password: string): boolean => {
	return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}$/.test(password);
};
