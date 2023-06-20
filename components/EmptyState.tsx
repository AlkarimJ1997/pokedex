import Icon from '@/components/Icon';
import { FaPlus } from 'react-icons/fa';

const EmptyState = () => {
	return (
		<div className='text-center'>
			<Icon
				type={FaPlus}
				size={80}
				label='Add Pokemon to Compare'
				className='bg-accent rounded-[50%] p-8 text-slate-200'
			/>
			<h3 className='text-body uppercase tracking-widest text-slate-200 md:tracking-[0.3em]'>
				Add Pokemon To Compare
			</h3>
		</div>
	);
};

export default EmptyState;
