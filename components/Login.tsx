import { fetchUser } from '@/lib/firebase/actions';
import { FcGoogle } from 'react-icons/fc';
import useStore from '@/hooks/useStore';

const Login = () => {
	const setUser = useStore(state => state.setUser);

	const handleLogin = async () => {
		const user = await fetchUser();

		if (!user || !user.email) return;

		setUser({ email: user.email });
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
