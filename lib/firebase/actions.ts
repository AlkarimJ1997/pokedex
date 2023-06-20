import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, usersCollection } from '@/lib/firebase/config';

export const handleLogin = async () => {
	const provider = new GoogleAuthProvider();
	const { user } = await signInWithPopup(auth, provider);

	if (user.email) {
		const q = query(usersCollection, where('uid', '==', user.uid));
		const fetchedUser = await getDocs(q);

		if (fetchedUser.docs.length === 0) {
			// Create new user
			await addDoc(usersCollection, {
				uid: user.uid,
				email: user.email,
			});
		}

		// Update user info
		setUser({ email: user.email });
	}
};
