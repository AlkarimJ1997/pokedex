'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { IoGitCompare } from 'react-icons/io5';
import clsx from 'clsx';
import Image from 'next/image';
import Icon from '@/components/Icon';

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
		<div className='w-[250px] rounded-2xl bg-secondary-100 p-4 shadow-2xl'>
			<div className='flex justify-between'>
				<Icon
					type={plusRoute ? FaPlus : FaTrash}
					label={plusRoute ? 'Add Pokemon' : 'Remove Pokemon'}
					size={16}
					className={clsx(
						'transition duration-300 ease-in-out hover:scale-[1.75]',
						plusRoute ? 'text-green-500' : 'text-red-500'
					)}
				/>
				<Icon
					type={IoGitCompare}
					label='Compare Pokemon'
					size={20}
					className='text-blue-600 transition duration-300 ease-in-out hover:scale-[1.75]'
				/>
			</div>
			<h3 className='mt-4 text-center'>{name}</h3>
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