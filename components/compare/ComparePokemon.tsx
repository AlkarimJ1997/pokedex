'use client';

import { useRouter } from 'next/navigation';
import { capitalize } from '@/utils/helpers';
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
	const userInfo = useStore(state => state.userInfo);
	const userPokemon = useStore(state => state.userPokemon);

	const addToast = useStore(state => state.addToast);
	const addToList = useStore(state => state.addToList);
	const removeFromCompare = useStore(state => state.removeFromCompare);

	const router = useRouter();

	const handleListAdd = () => {
		if (!userInfo.email) {
			addToast({
				type: 'error',
				message: 'You must be logged in to save Pokemon!',
			});
			return;
		}

		if (userPokemon.find(p => p.id === pokemon.id)) {
			addToast({
				type: 'custom',
				message: `${capitalize(pokemon.name)} is already saved!`,
			});
			return;
		}

		addToList(pokemon, userInfo, resolve => {
			if (resolve) {
				addToast({
					type: 'custom',
					message: `${capitalize(pokemon.name)} added to your list!`,
				});
			}
		});
	};

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
						<CompareButton
							onClick={handleListAdd}
							className='hover:border-blue-700 hover:bg-blue-700'>
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
