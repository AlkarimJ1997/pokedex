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
		<div className='flex flex-col items-center gap-y-4 rounded-md border border-slate-700 p-4 md:flex-row md:gap-8 md:gap-y-0 md:border-none'>
			<h3 className='uppercase tracking-widest text-slate-200 md:text-lg'>
				{category}
			</h3>
			<ul
				role='list'
				className='mx-auto flex max-w-[90%] flex-wrap gap-4 md:mx-0 md:max-w-full'>
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
