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
		<div className='flex items-center gap-8 rounded-md border border-slate-700 p-4 md:border-none'>
			<h3 className='uppercase tracking-widest text-slate-200 md:text-lg'>{category}</h3>
			<ul role='list' className='flex flex-wrap gap-4'>
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
