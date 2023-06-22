'use client';

import { getAccentColor } from '@/utils/helpers';
import { useEffect } from 'react';

interface ColorSetterProps {
	src: string;
}

const ColorSetter = ({ src }: ColorSetterProps) => {
	useEffect(() => {
		if (!src) return;

		const setColor = async () => {
			const accentColor = await getAccentColor(src);
      console.log(accentColor);

			document.documentElement.style.setProperty('--accent-color', accentColor);
		};

		setColor();
	}, [src]);

	return null;
};

export default ColorSetter;
