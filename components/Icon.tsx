import { IconType } from 'react-icons/lib';

interface IconProps {
	type: IconType;
	label: string;
	size?: number;
	onClick?: () => void;
	className?: string;
}

const Icon = ({
	type: ReactIcon,
	label,
	onClick,
	className,
	size = 16,
}: IconProps) => {
	return (
		<button aria-label={label} onClick={onClick} className={className}>
			<ReactIcon size={size} aria-hidden='true' focusable='false' />
			<span className='sr-only'>{label}</span>
		</button>
	);
};

export default Icon;
