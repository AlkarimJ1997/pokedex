import { GiHamburgerMenu } from 'react-icons/gi';
import pokeballIcon from '@/assets/pokeball-icon.png';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className='grid grid-cols-[5rem_auto_5rem] border-b border-b-[rgba(255,255,255,0.23)]'>
			<div className='flex items-center justify-center'>
				<Image
					src={pokeballIcon}
					alt='Pokeball'
					className='h-12 cursor-pointer object-contain'
				/>
			</div>
			<div className='border-x border-x-[rgba(255,255,255,0.23)]'></div>
			<div className='flex items-center justify-center'>
				<GiHamburgerMenu size={32} className='cursor-pointer text-white' />
			</div>
		</nav>
	);
};

export default Navbar;
