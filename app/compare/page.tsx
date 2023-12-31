'use client';

import ComparePokemon from '@/components/compare/ComparePokemon';
import useStore from '@/hooks/useStore';

const Compare = () => {
	const compareQueue = useStore(state => state.compareQueue);

	return (
		<section className='h-full space-y-12 overflow-y-auto p-4 lg:flex lg:items-center lg:gap-8 lg:space-y-0 lg:overflow-y-visible'>
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
