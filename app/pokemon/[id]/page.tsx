interface IParams {
	id: string;
}

interface PokemonProps {
	params: IParams;
}

const Pokemon = ({ params }: PokemonProps) => {
	return <div>Pokemon {params.id}</div>;
};

export default Pokemon;
