import PokemonContainer from '@/components/pokemon/PokemonContainer';
import PokemonInfo from '@/components/pokemon/PokemonInfo';

interface DescriptionProps {
	currentPokemon: PokemonFullData;
}

const Description = ({ currentPokemon }: DescriptionProps) => {
	return (
		<div>
			<PokemonInfo currentPokemon={currentPokemon} />
			<PokemonContainer
				image={currentPokemon.image}
				name={currentPokemon.name}
			/>
		</div>
	);
};

export default Description;
