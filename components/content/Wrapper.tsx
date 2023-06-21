'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { toast } from 'react-hot-toast';
import useStore from '@/hooks/useStore';
import CustomToast from '@/components/CustomToast';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	const toasts = useStore(state => state.toasts);

	const setUser = useStore(state => state.setUser);
	const addToast = useStore(state => state.addToast);
	const clearToasts = useStore(state => state.clearToasts);

	// Firebase auth
	useEffect(() => {
		if (!setUser || !addToast) return;

		onAuthStateChanged(auth, currentUser => {
			if (!currentUser || !currentUser.email) return;

			addToast({
				type: 'success',
				message: `Welcome back, ${currentUser.displayName}!`,
			});
      
			setUser({ email: currentUser.email });
		});
	}, [setUser, addToast]);

	// Toast notifications
	useEffect(() => {
		if (!clearToasts || !toasts || toasts.length === 0) return;

		toasts.forEach(({ type, message }) => {
			switch (type) {
				case 'success':
					toast.success(message);
					break;
				case 'loading':
					toast.loading(message);
					break;
				case 'error':
					toast.error(message);
					break;
				case 'blank':
					toast(message);
					break;
				default:
					toast.custom(t => <CustomToast toast={t} message={message} />);
			}
		});

		clearToasts();
	}, [toasts, clearToasts]);

	return (
		<main className='h-mainHeight bg-secondary-50 md:mx-20 md:border-x md:border-x-secondary-border'>
			{children}
		</main>
	);
};

export default Wrapper;
