'use client';

import { signOut } from 'firebase/auth';
import { usePathname } from 'next/navigation';
import { auth } from '@/lib/firebase/config';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';
import { tabRoutes } from '@/data/pokemonTabs';
import useStore from '@/hooks/useStore';
import clsx from 'clsx';

const Footer = () => {
	const pokemonTab = useStore(state => state.pokemonTab);

	const setUser = useStore(state => state.setUser);
	const addToast = useStore(state => state.addToast);
	const setPokemonTab = useStore(state => state.setPokemonTab);

	const pathname = usePathname();

	const handleLogout = () => {
		signOut(auth);
		setUser({ email: '' });
		addToast({
			type: 'success',
			message: 'Logged out successfully',
		});
	};

	return (
		<footer className='fixed bottom-0 z-50 grid h-footerHeight w-full grid-cols-[5rem_auto_5rem] place-items-center border-t border-t-secondary-border'>
			<div />
			<div className='h-full w-full border-x border-x-secondary-border text-slate-200'>
				<ul
					role='list'
					className='hidden h-full w-full auto-cols-fr grid-flow-col place-items-center md:grid'>
					{pathname.startsWith('/pokemon') &&
						tabRoutes.map(({ name, value }) => (
							<li
								key={name}
								onClick={() => setPokemonTab(name)}
								className={clsx(
									'flex h-full w-full cursor-pointer items-center justify-center font-medium uppercase tracking-[0.2em] transition duration-300 ease-in-out hover:bg-accent',
									pokemonTab === name && 'bg-accent'
								)}>
								{value}
							</li>
						))}
				</ul>
			</div>
			<div>
				<MdOutlinePowerSettingsNew
					size={32}
					onClick={handleLogout}
					className='cursor-pointer text-red-500'
				/>
				<span className='sr-only'>Logout</span>
			</div>
		</footer>
	);
};

export default Footer;
