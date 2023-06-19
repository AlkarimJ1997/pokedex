'use client';

import { DebounceInput } from 'react-debounce-input';
import usePokemonStore from '@/hooks/usePokemonStore';

const SearchInput = () => {
	const filter = usePokemonStore(state => state.filter);
	const setFilter = usePokemonStore(state => state.setFilter);

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
