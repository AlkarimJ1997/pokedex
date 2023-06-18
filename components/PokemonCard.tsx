'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { IoGitCompare } from 'react-icons/io5';
import Image from 'next/image';

interface PokemonCardProps {
	id: number;
	name: string;
	image: string;
	types: PokemonType[];
}

const PokemonCard = ({ id, name, image, types }: PokemonCardProps) => {
	const pathname = usePathname();
	const router = useRouter();

	const plusRoute = useMemo(() => {
		return pathname === '/pokemon' || pathname === '/search';
	}, [pathname]);

	return (
		<div className='relative flex w-[250px] flex-col items-center justify-center rounded-2xl bg-secondary-100 p-4 shadow-2xl'>
			<div className='absolute left-3 top-3 cursor-pointer text-base'>
				{plusRoute ? (
					<FaPlus className='text-green-500 transition-all duration-300 ease-in-out hover:text-4xl' />
				) : (
					<FaTrash className='text-red-500 transition-all duration-300 ease-in-out hover:text-4xl' />
				)}
			</div>
			<div className='absolute right-3 top-3 cursor-pointer text-xl'>
				<IoGitCompare className='text-blue-600 transition-all duration-300 ease-in-out hover:text-4xl' />
			</div>
			<h3 className='mt-4 cursor-pointer text-center'>{name}</h3>
			<Image
				src={image}
				alt={name}
				onClick={() => router.push(`/pokemon/${id}`)}
				className='h-40 cursor-pointer object-contain'
				loading='lazy'
			/>
			<div className='grid w-full grid-cols-pokemonCardTypes gap-4'>
				{types.map((type, i) => {
					const pokemonType = Object.keys(type)[0];

					return (
						<div
							key={i}
							className='mt-2 flex flex-col items-center justify-center gap-2'>
							<Image
								src={type[pokemonType as keyof typeof type].image}
								alt={pokemonType}
								className='h-8 object-contain'
								loading='lazy'
							/>
							<h6 className='text-sm'>{pokemonType}</h6>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PokemonCard;
