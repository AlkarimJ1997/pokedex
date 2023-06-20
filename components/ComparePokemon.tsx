import CompareHeader from '@/components/CompareHeader';
import EmptyState from '@/components/EmptyState';
import TypeChart from '@/components/TypeChart';
import { pokemonTypes } from '@/data/pokemonTypes';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';

interface ComparePokemonProps {
	pokemon: Pokemon;
	isEmpty: boolean;
}

const ComparePokemon = ({ pokemon, isEmpty }: ComparePokemonProps) => {
	// const createStatsArray = (types: PokemonType[], statType: StatType) => {
	// 	const statsArray: { name: string; image: string }[] = [];
	// 	const statsSet = new Set<string>();

	// 	types.forEach(type => {
	// 		const typeData = pokemonTypes[type];

	// 		typeData[statType].forEach(stat => {
	// 			if (!statsSet.has(stat)) {
	// 				statsSet.add(stat);
	// 				statsArray.push({ name: stat, image: pokemonTypes[stat].image });
	// 			}
	// 		});
	// 	});

	// 	return statsArray;
	// };

	// const getStats = () => {
	// 	const stats = createStatsArray(pokemon.types, 'strength');
	// 	const resistances = createStatsArray(pokemon.types, 'resistance');
	// 	const weaknesses = createStatsArray(pokemon.types, 'weakness');
	// 	const vulnerabilities = createStatsArray(pokemon.types, 'vulnerable');

	// 	return (
	// 		<>
	// 			<div className='grid w-full grid-cols-[25%_75%] gap-8'>
	// 				<h4 className='flex items-center justify-end'>Strengths</h4>
	// 				<div className='flex w-full flex-wrap gap-4'>
	// 					{stats.map((stat, i) => (
	// 						<div key={i} className='flex items-center justify-end'>
	// 							<Image
	// 								src={stat.image}
	// 								alt={stat.name}
	// 								className='h-12 object-contain'
	// 							/>
	// 						</div>
	// 					))}
	// 				</div>
	// 			</div>
	// 			<div className='grid w-full grid-cols-[25%_75%] gap-8'>
	// 				<h4 className='flex items-center justify-end'>Resistances</h4>
	// 				<div className='flex w-full flex-wrap gap-4'>
	// 					{resistances.map((resistance, i) => (
	// 						<div key={i} className='flex items-center justify-end'>
	// 							<Image
	// 								src={resistance.image}
	// 								alt={resistance.name}
	// 								className='h-12 object-contain'
	// 							/>
	// 						</div>
	// 					))}
	// 				</div>
	// 			</div>
	// 			<div className='grid w-full grid-cols-[25%_75%] gap-8'>
	// 				<h4 className='flex items-center justify-end'>Weaknesses</h4>
	// 				<div className='flex w-full flex-wrap gap-4'>
	// 					{weaknesses.map((weakness, i) => (
	// 						<div key={i} className='flex items-center justify-end'>
	// 							<Image
	// 								src={weakness.image}
	// 								alt={weakness.name}
	// 								className='h-12 object-contain'
	// 							/>
	// 						</div>
	// 					))}
	// 				</div>
	// 			</div>
	// 			<div className='grid w-full grid-cols-[25%_75%] gap-8'>
	// 				<h4 className='flex items-center justify-end'>Vulnerabilities</h4>
	// 				<div className='flex w-full flex-wrap gap-4'>
	// 					{vulnerabilities.map((vulnerability, i) => (
	// 						<div key={i} className='flex items-center justify-end'>
	// 							<Image
	// 								src={vulnerability.image}
	// 								alt={vulnerability.name}
	// 								className='h-12 object-contain'
	// 							/>
	// 						</div>
	// 					))}
	// 				</div>
	// 			</div>
	// 		</>
	// 	);
	// };

	return (
		<div className='w-full lg:h-full lg:overflow-y-auto'>
			{isEmpty && <EmptyState />}
			{pokemon && (
				<div className='w-full space-y-8'>
					<CompareHeader name={pokemon.name} image={pokemon.image!} />
					<TypeChart types={pokemon.types} />
				</div>
			)}
			{/* {pokemon && (
				<div className='grid h-full grid-cols-1 grid-rows-[95%_5%]'>
					<div className='grid w-full grid-rows-[40%_60%] uppercase tracking-widest text-slate-200'>
						<div className='flex max-h-full w-full flex-col items-start gap-4 overflow-x-hidden overflow-y-scroll pb-4'>
							<div className='grid w-full grid-cols-[25%_75%] gap-8'>
								<h4 className='pokemon-types-title'>Type</h4>
								<div className='flex w-full flex-wrap gap-4'>
									{pokemon.types.map((type, i) => {
										const typeData = pokemonTypes[type];

										return (
											<div key={i} className='flex items-center justify-end'>
												<Image
													src={typeData.image}
													alt={type}
													className='h-12 object-contain'
												/>
											</div>
										);
									})}
								</div>
							</div>
							{getStats()}
						</div>
					</div>
					<div className='grid w-full grid-cols-3'>
						<button className='border border-slate-50 bg-transparent text-xl uppercase tracking-widest text-slate-300 transition duration-300 ease-in-out hover:border-blue-700 hover:bg-blue-700'>
							Add
						</button>
						<button className='border border-slate-50 bg-transparent text-xl uppercase tracking-widest text-slate-300 transition duration-300 ease-in-out hover:border-green-500 hover:bg-green-500'>
							View
						</button>
						<button className='border border-slate-50 bg-transparent text-xl uppercase tracking-widest text-slate-300 transition duration-300 ease-in-out hover:border-red-500 hover:bg-red-500'>
							Remove
						</button>
					</div>
				</div>
			)} */}
		</div>
	);
};

export default ComparePokemon;
