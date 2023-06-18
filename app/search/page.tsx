import PokemonGrid from '@/components/PokemonGrid';
import { getInitialPokemon, getPokemonData } from '@/utils/api/pokemon';
import { getRandomFromArray } from '@/utils/helpers';

const Search = async () => {
	const pokemon = await getInitialPokemon();
	const pokemonData = await getPokemonData(getRandomFromArray(pokemon, 20));

	return (
		<div className='pt-4 uppercase text-slate-200'>
			<input
				type='text'
				placeholder='Search Pokemon'
				className='mx-auto block w-full max-w-[95%] rounded-md bg-secondary-100 p-4 text-xl placeholder-secondary-400 shadow-2xl'
			/>
			<PokemonGrid pokemon={pokemonData} />
		</div>
	);
};

export default Search;
