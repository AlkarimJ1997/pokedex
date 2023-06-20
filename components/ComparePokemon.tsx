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
	return (
		<div className='w-full lg:h-full lg:overflow-y-auto'>
			{isEmpty && <EmptyState />}
			{pokemon && (
				<div className='w-full space-y-8 lg:grid lg:h-full lg:grid-rows-[30%_70%] lg:place-items-center lg:gap-8 lg:space-y-0'>
					<CompareHeader name={pokemon.name} image={pokemon.image!} />
					<TypeChart types={pokemon.types} />
				</div>
			)}
			{/* {pokemon && (
				<div className='grid h-full grid-cols-1 grid-rows-[95%_5%]'>
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
