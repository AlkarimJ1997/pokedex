'use client';

import ComparePokemon from '@/components/ComparePokemon';
import useStore from '@/hooks/useStore';

const Compare = () => {
	const compareQueue = useStore(state => state.compareQueue);

	return (
		<div className='flex h-full flex-col justify-around p-4 lg:flex-row lg:items-center'>
			<ComparePokemon
				pokemon={compareQueue[0]}
				isEmpty={compareQueue.length === 0}
			/>
			<ComparePokemon
				pokemon={compareQueue[1]}
				isEmpty={compareQueue.length <= 1}
			/>
		</div>
	);
};

export default Compare;
