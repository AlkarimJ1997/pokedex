import clsx from 'clsx';
import CompareHeader from '@/components/CompareHeader';
import EmptyState from '@/components/EmptyState';
import TypeChart from '@/components/TypeChart';

interface ComparePokemonProps {
	pokemon: Pokemon;
	isEmpty: boolean;
}

const ComparePokemon = ({ pokemon, isEmpty }: ComparePokemonProps) => {
	return (
		<div className='w-full lg:h-full'>
			{isEmpty && <EmptyState />}
			{pokemon && (
				<div className='grid gap-y-8 lg:h-full lg:grid-rows-[95%_5%] lg:gap-y-0'>
					<div className='w-full space-y-8 lg:grid lg:h-full lg:grid-rows-[30%_70%] lg:place-items-center lg:gap-8 lg:space-y-0'>
						<CompareHeader name={pokemon.name} image={pokemon.image!} />
						<TypeChart types={pokemon.types} />
					</div>
					<div className='grid w-full grid-cols-3 gap-4 lg:mx-auto lg:max-w-5xl'>
						{['Add', 'View', 'Remove'].map(name => (
							<button
								key={name}
								className={clsx(
									'col-span-3 border border-slate-50 bg-transparent py-4 uppercase tracking-widest text-slate-300 transition duration-300 ease-in-out xs:col-span-1 lg:py-0 lg:text-xl',
									name === 'Add' && 'hover:border-blue-700 hover:bg-blue-700',
									name === 'View' &&
										'hover:border-green-500 hover:bg-green-500',
									name === 'Remove' && 'hover:border-red-500 hover:bg-red-500'
								)}>
								{name}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ComparePokemon;
