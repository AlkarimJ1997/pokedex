import Image from 'next/image';

interface CompareHeaderProps {
	name: string;
	image: string;
}

const CompareHeader = ({ name, image }: CompareHeaderProps) => {
	return (
		<header className='w-full'>
			<h2 className='text-center text-lg uppercase tracking-widest text-slate-200'>
				{name}
			</h2>
			<div className='relative h-40 w-full lg:h-52'>
				<Image fill src={image} alt={name} className='object-contain' />
			</div>
		</header>
	);
};

export default CompareHeader;
