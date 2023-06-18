import PokemonGrid from '@/components/PokemonGrid';
import { getInitialPokemon, getPokemonData } from '@/utils/api/pokemon';
import { getRandomFromArray } from '@/utils/helpers';

const Search = async () => {
	const pokemon = await getInitialPokemon();
	const pokemonData = await getPokemonData(getRandomFromArray(pokemon, 20));

	return (
		<div className='h-full w-full max-w-full uppercase text-slate-200'>
			<input
				type='text'
				placeholder='Search Pokemon'
				className='w-full py-4 pl-4 text-xl bg-secondary-100 text-slate-200 shadow-2xl placeholder-secondary-400'
			/>
			<PokemonGrid pokemon={pokemonData} />
		</div>
	);
};

export default Search;
