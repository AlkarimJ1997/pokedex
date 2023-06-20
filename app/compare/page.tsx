'use client';

import ComparePokemon from '@/components/ComparePokemon';
import useStore from '@/hooks/useStore';

const Compare = () => {
	const compareQueue = useStore(state => state.compareQueue);

	return (
		<section className='h-full space-y-12 p-4 lg:flex lg:items-center lg:space-y-0'>
			<ComparePokemon
				pokemon={compareQueue[0]}
				isEmpty={compareQueue.length === 0}
			/>
			<ComparePokemon
				pokemon={compareQueue[1]}
				isEmpty={compareQueue.length <= 1}
			/>
		</section>
	);
};

export default Compare;
