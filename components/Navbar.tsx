'use client';

import { useRef, useMemo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navLinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import pokeballIcon from '@/assets/pokeball-icon.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	const pathname = usePathname();
	const slidingRef = useRef<HTMLDivElement>(null);

	const sliderWidth = useMemo(() => {
		return 100 / navLinks.length;
	}, []);

	useEffect(() => {
		if (!slidingRef.current || Number.isNaN(sliderWidth)) return;

		const activeLink = navLinks.findIndex(({ path }) =>
			pathname.startsWith(path)
		);

		slidingRef.current.style.left = `calc(${activeLink} * ${sliderWidth}%)`;
	}, [slidingRef, pathname, sliderWidth]);

	return (
		<header>
			<nav className='grid h-navHeight grid-cols-[5rem_auto_5rem] place-items-center border-b border-b-secondary-border'>
				<Image
					src={pokeballIcon}
					alt='Pokeball'
					width={48}
					height={48}
					className='cursor-pointer object-contain'
				/>
				<div className='h-full w-full border-x border-x-secondary-border'>
					<ul
						role='list'
						className='relative mx-auto hidden h-full w-full max-w-[90%] auto-cols-fr grid-flow-col place-items-center text-slate-200 md:grid lg:max-w-[60%]'>
						{navLinks.map(({ name, path }, i) => (
							<li
								key={i}
								className='cursor-pointer font-medium uppercase tracking-widest'>
								<Link href={path}>{name}</Link>
							</li>
						))}
						<div
							ref={slidingRef}
							style={{ width: `${sliderWidth}%` }}
							className='absolute bottom-0.5 left-0 h-1 rounded-full bg-accent transition-all duration-500 ease-in-out'
						/>
					</ul>
				</div>
				<div>
					<GiHamburgerMenu size={32} className='cursor-pointer text-white' />
					<span className='sr-only'>Hamburger Menu</span>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
