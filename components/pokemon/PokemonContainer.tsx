import Image from 'next/image';

interface PokemonContainerProps {
	image: string;
	name: string;
}

const PokemonContainer = ({ image, name }: PokemonContainerProps) => {
	return (
		<div className='flex justify-center'>
			<div className='relative mt-12 flex h-96 w-96 items-center justify-center rounded-[50%] border border-accent'>
				<div className=' flex h-80 w-80 items-center justify-center rounded-[50%] border-2 border-accent'>
					<Image
						src={image}
						alt={name}
						width={400}
						height={272}
						className='z-10 h-72 max-w-full object-contain'
					/>
				</div>
				<div className='absolute flex gap-12'>
					<div className='h-[28rem] w-[0.3rem] rotate-45 bg-accent'></div>
					<div className='h-[28rem] w-[0.3rem] rotate-45 bg-accent'></div>
				</div>
			</div>
		</div>
	);
};

export default PokemonContainer;
