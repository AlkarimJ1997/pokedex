'use client';

import useStore from '@/hooks/useStore';
import { auth } from '@/lib/firebase/config';
import { signOut } from 'firebase/auth';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';

const Footer = () => {
	const setUser = useStore(state => state.setUser);
	const addToast = useStore(state => state.addToast);

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
			<ul
				role='list'
				className='flex h-full w-full border-x border-x-secondary-border'></ul>
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
