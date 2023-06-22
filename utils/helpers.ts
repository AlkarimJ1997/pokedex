export const getRandomFromArray = <T>(arr: T[], num: number): T[] => {
	return arr.sort(() => 0.5 - Math.random()).slice(0, num);
};

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
