'use client';

import Login from '@/components/Login';
import useStore from '@/hooks/useStore';

const List = () => {
	const userInfo = useStore(state => state.userInfo);

	return (
		<div className='h-full w-full max-w-full uppercase text-slate-200'>
			<Login />
		</div>
	);
};

export default List;
