import extractColors from 'extract-colors';

export const getRandomFromArray = <T>(arr: T[], num: number): T[] => {
	return arr.sort(() => 0.5 - Math.random()).slice(0, num);
};

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getAccentColor = async (src: string) => {
	const color = await extractColors(src, {
		pixels: 10000,
		distance: 1,
		colorValidator: (red, green, blue, alpha = 255) => alpha > 250,
		saturationDistance: 0.2,
		lightnessDistance: 0.2,
		hueDistance: 0.083333333,
		crossOrigin: 'anonymous',
	});

	return color[0].hex.split('"')[0];
};
