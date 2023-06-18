import PokemonCard from '@/components/PokemonCard';

type PokemonGridProps = {
	pokemon: UserPokemonData[];
};

const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
	if (!pokemon || pokemon.length === 0) return null;

	return (
		<div className='max-h-[85vh] overflow-y-scroll'>
			<div className='mt-8 grid grid-cols-pokemonGrid place-items-center gap-y-4 lg:gap-16'>
				{pokemon
					.filter(data => data.image)
					.map(data => (
						<PokemonCard
							key={data.id}
							id={data.id}
							name={data.name}
							image={data.image!}
							types={data.types}
						/>
					))}
			</div>
		</div>
	);
};

export default PokemonGrid;
