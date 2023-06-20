import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db, usersCollection } from '@/lib/firebase/config';
import { FcGoogle } from 'react-icons/fc';
import useStore from '@/hooks/useStore';

const Login = () => {
	const setUser = useStore(state => state.setUser);

	const handleLogin = async () => {
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

	return (
		<div className='flex h-full w-full items-center justify-center'>
			<button
				onClick={handleLogin}
				className='flex items-center justify-center gap-4 border-[5px] border-slate-200 bg-transparent p-4 text-2xl font-bold uppercase tracking-[0.2em] text-slate-200 transition-all duration-[400ms] ease-in-out hover:rounded-2xl hover:border-[10px] hover:border-b-green-500 hover:border-l-yellow-300 hover:border-r-blue-700 hover:border-t-red-500'>
				<FcGoogle size={48} />
				Login with Google
			</button>
		</div>
	);
};

export default Login;
