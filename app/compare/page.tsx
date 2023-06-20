'use client';

import ComparePokemon from '@/components/ComparePokemon';
import useStore from '@/hooks/useStore';

const Compare = () => {
	const compareQueue = useStore(state => state.compareQueue);

	return (
		<div className='grid h-full w-full grid-cols-[49%_49%] gap-4 p-4'>
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
