import { compareButtons } from '@/data/compareButtons';
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
						{compareButtons.map(({ name, customStyles }) => (
							<button
								key={name}
								className={clsx(
									'col-span-3 border border-slate-50 bg-transparent py-4 uppercase tracking-widest text-slate-300 transition duration-300 ease-in-out xs:col-span-1',
									customStyles
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
