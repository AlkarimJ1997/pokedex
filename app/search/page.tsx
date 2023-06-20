import { getInitialPokemon, getPokemonData } from '@/utils/api/pokemon';
import PokemonGrid from '@/components/PokemonGrid';
import SearchInput from '@/components/SearchInput';

const Search = async () => {
	const pokemonJson = await getInitialPokemon();
	const pokemon = await getPokemonData(pokemonJson);

	return (
		<section className='pt-4 uppercase text-slate-200'>
			<SearchInput />
			<PokemonGrid pokemon={pokemon} />
		</section>
	);
};

export default Search;
