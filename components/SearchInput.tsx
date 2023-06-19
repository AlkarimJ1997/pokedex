'use client';

import usePokemonStore from '@/hooks/usePokemonStore';

const SearchInput = () => {
	const filter = usePokemonStore(state => state.filter);
  const setFilter = usePokemonStore(state => state.setFilter);

	return (
		<input
			type='text'
			value={filter}
			placeholder='Search Pokemon'
			onChange={e => setFilter(e.target.value)}
			className='mx-auto block w-full max-w-[95%] rounded-md bg-secondary-100 p-4 text-xl placeholder-secondary-400 shadow-2xl'
		/>
	);
};

export default SearchInput;
