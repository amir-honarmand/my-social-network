export const pagination = (page: number, limit: number): number => {
	return (page - 1) * limit;
};
