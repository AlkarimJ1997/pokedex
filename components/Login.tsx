import { getUser } from '@/lib/firebase/actions';
import { FcGoogle } from 'react-icons/fc';
import useStore from '@/hooks/useStore';

const Login = () => {
	const setUser = useStore(state => state.setUser);

	const handleLogin = async () => {
		if (!setUser) return;

		const user = await getUser();

		if (!user?.email) return;

		setUser({ email: user.email });
	};

	return (
		<div className='mx-auto grid h-full max-w-[85%] place-items-center'>
			<button
				onClick={handleLogin}
				className='flex items-center gap-4 border-4 border-slate-200 bg-transparent p-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-200 transition-all duration-[400ms] ease-in-out hover:rounded-2xl hover:border-8 hover:border-b-green-500 hover:border-l-yellow-300 hover:border-r-blue-700 hover:border-t-red-500 md:text-base lg:text-2xl'>
				<FcGoogle
					size={48}
					aria-label='Sign In With Google'
					focusable='false'
				/>
				Login with Google
			</button>
		</div>
	);
};

export default Login;
