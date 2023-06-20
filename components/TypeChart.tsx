import TypeList from '@/components/TypeList';
import { pokemonTypes } from '@/data/pokemonTypes';
import { chartData } from '@/data/chartData';

interface TypeChartProps {
	types: PokemonType[];
}

const TypeChart = ({ types }: TypeChartProps) => {
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
		<div className='space-y-6'>
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