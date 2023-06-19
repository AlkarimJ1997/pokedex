import { getInitialPokemon, getPokemonData } from '@/utils/api/pokemon';
import usePokemonStore from '@/hooks/usePokemonStore';
import PokemonGrid from '@/components/PokemonGrid';
import SearchInput from '@/components/SearchInput';

const Search = async () => {
	const pokemonJson = await getInitialPokemon();
	const pokemon = await getPokemonData(pokemonJson);

	return (
		<div className='pt-4 uppercase text-slate-200'>
			<SearchInput />
			<PokemonGrid pokemon={pokemon} />
		</div>
	);
};

export default Search;
