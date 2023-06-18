import PokemonCard from '@/components/PokemonCard';

type PokemonGridProps = {
	pokemon: UserPokemonData[];
};

const PokemonGrid = ({ pokemon }: PokemonGridProps) => {
	if (!pokemon || pokemon.length === 0) return null;

	return (
		<div className='max-h-pokemonGridHeight overflow-y-scroll pb-4 md:max-h-[80vh] lg:max-h-[85vh]'>
			<div className='mt-8 grid grid-cols-pokemonGrid place-items-center gap-y-4 lg:gap-x-16 lg:gap-y-12'>
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
