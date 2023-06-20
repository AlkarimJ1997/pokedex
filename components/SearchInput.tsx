'use client';

import { DebounceInput } from 'react-debounce-input';
import useStore from '@/hooks/useStore';

const SearchInput = () => {
	const filter = useStore(state => state.filter);
	const setFilter = useStore(state => state.setFilter);

	return (
		<DebounceInput
			type='text'
			value={filter}
			placeholder='Search Pokemon'
			debounceTimeout={300}
			onChange={e => setFilter(e.target.value)}
			className='mx-auto block w-full max-w-[95%] rounded-md bg-secondary-100 p-4 text-xl placeholder-secondary-400 shadow-2xl focus:outline-none focus:outline-2 focus:outline-blue-500'
		/>
	);
};

export default SearchInput;
