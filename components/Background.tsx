import pokeball1 from '@/assets/pokeball.png';
import pokeball2 from '@/assets/pokeball2.png';
import Image from 'next/image';

const Background = () => {
	const images = [pokeball1, pokeball2] as const;

	return (
		<div className='absolute inset-0 -z-10 grid auto-rows-fr grid-cols-3 gap-8 bg-primary-500 blur-sm after:absolute after:inset-0 after:bg-primary-500 after:backdrop-blur-2xl'>
			{[...images, ...images, ...images].map((image, i) => (
				<Image key={i} src={image} alt='Pokeball' />
			))}
		</div>
	);
};

export default Background;
