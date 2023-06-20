import type { Toast } from 'react-hot-toast';
import pokeballIcon from '@/assets/pokeball-icon.png';
import Image from 'next/image';
import clsx from 'clsx';

interface CustomToastProps {
	toast: Toast;
	message: string;
}

const CustomToast = ({ toast, message }: CustomToastProps) => {
	return (
		<div
			className={clsx(
				'flex h-full items-center gap-4 rounded-md bg-slate-200 p-4 shadow-md',
				toast.visible ? 'animate-enter' : 'animate-leave'
			)}>
			<Image
				src={pokeballIcon}
				alt='Pokeball Icon'
				width={32}
				height={32}
				className='animate-bounce-fast'
			/>
			<h3 className='font-medium'>{message}</h3>
		</div>
	);
};

export default CustomToast;
