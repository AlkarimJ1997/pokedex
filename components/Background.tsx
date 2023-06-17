import pokeball1 from '@/assets/pokeball.png';
import pokeball2 from '@/assets/pokeball2.png';
import Image from 'next/image';

const Background = () => {
	return (
		<div className='absolute -z-10 grid min-h-screen auto-rows-fr grid-cols-3 gap-8 bg-primary-500 blur-sm'>
			<Image src={pokeball1} alt='Pokeball' className='' />
			<Image src={pokeball2} alt='Pokeball' className='' />
			<Image src={pokeball1} alt='Pokeball' className='' />
			<Image src={pokeball2} alt='Pokeball' className='' />
			<Image src={pokeball1} alt='Pokeball' className='' />
			<Image src={pokeball2} alt='Pokeball' className='' />
		</div>
	);
};

export default Background;
