export const getRandomFromArray = <T>(arr: T[], num: number): T[] => {
	return arr.sort(() => 0.5 - Math.random()).slice(0, num);
};

export const fetchImages = (context: string) => {
	const images = {};
	const cache = {};
	function importAll(r) {
		r.keys().forEach(key => (cache[key] = r(key)));
	}
	importAll(context);
	Object.entries(cache).forEach((module: string[]) => {
		let key = module[0].split('');
		key.splice(0, 2);
		key.splice(-4, 4);
		images[[key.join('')]] = module[1];
	});
	return images;
};

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
