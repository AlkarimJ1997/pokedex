import { pokemonTypes } from '@/data/pokemonTypes';
import { chartData } from '@/data/chartData';
import TypeList from '@/components/TypeList';

interface TypeChartProps {
	types: PokemonType[];
}

const TypeChart = ({ types }: TypeChartProps) => {
	const selfTypes = () => {
		return types.map(type => ({ name: type, image: pokemonTypes[type].image }));
	};

	const createPokemonChart = (statType: StatType) => {
		const statsSet = new Set<string>();
		const typeBreakdown = types
			.flatMap(type => pokemonTypes[type][statType])
			.filter(stat => !statsSet.has(stat))
			.map(stat => {
				statsSet.add(stat);
				return { name: stat, image: pokemonTypes[stat].image };
			});

		return typeBreakdown;
	};

	return (
		<div className='space-y-6 md:space-y-4 lg:h-[90%] lg:space-y-0 lg:self-start lg:overflow-y-auto lg:w-full'>
			<TypeList key='Type' category='Type' statBreakdown={selfTypes()} />
			{chartData.map(({ category, key }) => (
				<TypeList
					key={category}
					category={category}
					statBreakdown={createPokemonChart(key)}
				/>
			))}
		</div>
	);
};

export default TypeChart;
