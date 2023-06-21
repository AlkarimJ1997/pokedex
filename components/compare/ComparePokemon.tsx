'use client';

import { useRouter } from 'next/navigation';
import useStore from '@/hooks/useStore';
import EmptyState from '@/components/compare/EmptyState';
import CompareHeader from '@/components/compare/CompareHeader';
import TypeChart from '@/components/compare/TypeChart';
import CompareButton from '@/components/compare/CompareButton';

interface ComparePokemonProps {
	pokemon: Pokemon;
	isEmpty: boolean;
}

const ComparePokemon = ({ pokemon, isEmpty }: ComparePokemonProps) => {
	const removeFromCompare = useStore(state => state.removeFromCompare);
	const router = useRouter();

	return (
		<div className='w-full lg:h-full'>
			{isEmpty && <EmptyState />}
			{pokemon && (
				<div className='grid gap-y-8 lg:h-full lg:grid-rows-[95%_5%] lg:gap-y-0'>
					<div className='w-full space-y-8 lg:grid lg:h-full lg:grid-rows-[30%_70%] lg:place-items-center lg:gap-8 lg:space-y-0'>
						<CompareHeader name={pokemon.name} image={pokemon.image!} />
						<TypeChart types={pokemon.types} />
					</div>
					<div className='grid w-full grid-cols-3 gap-4 lg:mx-auto lg:max-w-5xl'>
						<CompareButton className='hover:border-blue-700 hover:bg-blue-700'>
							Add
						</CompareButton>
						<CompareButton
							onClick={() => router.push(`/pokemon/${pokemon.id}`)}
							className='hover:border-green-500 hover:bg-green-500'>
							View
						</CompareButton>
						<CompareButton
							onClick={() => removeFromCompare(pokemon.id)}
							className='hover:border-red-500 hover:bg-red-500'>
							Remove
						</CompareButton>
					</div>
				</div>
			)}
		</div>
	);
};

export default ComparePokemon;
