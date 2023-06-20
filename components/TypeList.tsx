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
		<div className='flex items-center'>
			<h3 className='uppercase tracking-widest text-slate-200'>{category}</h3>
			<ul role='list' className='flex'>
				{statBreakdown.map(({ name, image }, i) => (
					<li key={i} className='flex items-center justify-end'>
						<Image
							src={image}
							alt={name}
							className='h-12 w-12 object-contain'
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TypeList;
