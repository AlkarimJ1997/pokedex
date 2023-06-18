import { IconType } from 'react-icons/lib';

interface IconProps {
	type: IconType;
	label: string;
	size?: number;
	className?: string;
}

const Icon = ({ type: ReactIcon, label, size = 16, className }: IconProps) => {
	return (
		<button aria-label={label} className={className}>
			<ReactIcon size={size} aria-hidden='true' focusable='false' />
			<span className='sr-only'>{label}</span>
		</button>
	);
};

export default Icon;
