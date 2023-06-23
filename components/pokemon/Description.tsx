interface DescriptionProps {
	currentPokemon: PokemonFullData;
}

const Description = ({ currentPokemon }: DescriptionProps) => {
	return <div>{currentPokemon.name}</div>;
};

export default Description;
