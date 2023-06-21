'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { IoGitCompare } from 'react-icons/io5';
import { pokemonTypes } from '@/data/pokemonTypes';
import { capitalize } from '@/utils/helpers';
import clsx from 'clsx';
import useStore from '@/hooks/useStore';
import Image from 'next/image';
import Icon from '@/components/Icon';
import { addDoc } from 'firebase/firestore';
import { pokemonCollection } from '@/lib/firebase/config';

interface PokemonCardProps {
	id: number;
	name: string;
	image: string;
	types: PokemonType[];
}

const PokemonCard = ({ id, name, image, types }: PokemonCardProps) => {
	const userInfo = useStore(state => state.userInfo);
	const userPokemon = useStore(state => state.userPokemon);

	const addToCompare = useStore(state => state.addToCompare);
	const addToast = useStore(state => state.addToast);

	const pathname = usePathname();
	const router = useRouter();

	const plusRoute = useMemo(() => {
		return pathname === '/pokemon' || pathname === '/search';
	}, [pathname]);

	const handleCompareAdd = () => {
		addToCompare({ id, name, image, types });
		addToast({
			type: 'custom',
			message: `${capitalize(name)} added to compare!`,
		});
	};

	const handleListAdd = async () => {
		if (!userInfo.email) {
			addToast({
				type: 'error',
				message: 'You must be logged in to save Pokemon!',
			});
			return;
		}

		if (userPokemon.find(pokemon => pokemon.id === id)) {
			addToast({
				type: 'custom',
				message: `${capitalize(name)} is already saved!`,
			});
			return;
		}

		try {
			const typeStats = types.map(type => {
				const { image, ...stats } = pokemonTypes[type];

				return [type, { ...stats, image: image.src }];
			});

			await addDoc(pokemonCollection, {
				pokemon: { id, name, image, types: Object.fromEntries(typeStats) },
			});

			addToast({
				type: 'custom',
				message: `${capitalize(name)} added to your list!`,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='w-cardWidth rounded-2xl bg-secondary-100 p-4 shadow-2xl'>
			<div className='flex justify-between'>
				<Icon
					type={plusRoute ? FaPlus : FaTrash}
					label={plusRoute ? 'Add Pokemon' : 'Remove Pokemon'}
					onClick={plusRoute ? handleListAdd : undefined}
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
					onClick={handleCompareAdd}
					className='text-blue-600 transition duration-300 ease-in-out hover:scale-[1.75]'
				/>
			</div>
			<h3 className='mt-4 text-center'>{name}</h3>
			<div className='relative mb-4 h-40 cursor-pointer'>
				<Image
					fill
					src={image}
					alt={name}
					onClick={() => router.push(`/pokemon/${id}`)}
					className='object-contain'
					loading='lazy'
				/>
			</div>
			<div className='grid w-full grid-cols-pokemonCardTypes gap-4'>
				{types.map((type, i) => {
					const typeData = pokemonTypes[type];

					return (
						<div key={i} className='space-y-3 text-center'>
							<Image
								src={typeData.image}
								alt={type}
								className='h-8 object-contain'
								loading='lazy'
							/>
							<h6 className='text-sm'>{type}</h6>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PokemonCard;
