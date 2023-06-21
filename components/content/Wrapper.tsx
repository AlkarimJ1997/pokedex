'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import useStore from '@/hooks/useStore';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	const setUser = useStore(state => state.setUser);

	useEffect(() => {
		if (!setUser) return;

		onAuthStateChanged(auth, currentUser => {
			if (!currentUser || !currentUser.email) return;

			// addToast({
			// 	type: 'success',
			// 	message: `Welcome back, ${currentUser.displayName}!`,
			// });
			setUser({ email: currentUser.email });
		});
	}, [setUser]);

	return (
		<main className='h-mainHeight bg-secondary-50 md:mx-20 md:border-x md:border-x-secondary-border'>
			{children}
		</main>
	);
};

export default Wrapper;
