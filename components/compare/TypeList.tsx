import Image from 'next/image';

interface TypeListProps {
	category: string;
	statBreakdown: {
		name: string;
		image: string;
	}[];
}

const TypeList = ({ category, statBreakdown }: TypeListProps) => {
	return (
		<div className='grid place-items-center gap-y-4 rounded-md border border-slate-700 p-4 text-center sm:grid-cols-[max-content_1fr] sm:gap-x-4 md:border-none xl:grid-cols-[25%_75%]'>
			<h3 className='uppercase tracking-widest text-slate-200 md:text-lg lg:justify-self-end'>
				{category}
			</h3>
			<ul
				role='list'
				className='grid w-full grid-cols-typeChart place-content-center gap-4 sm:place-content-start lg:flex lg:flex-wrap'>
				{statBreakdown.map(({ name, image }, i) => (
					<li key={i} title={name}>
						<Image
							src={image}
							alt={name}
							className='aspect-square w-10 object-contain md:w-12'
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TypeList;
