import clsx from 'clsx';

interface CompareButtonProps {
	children: string;
  className?: string;
}

const CompareButton = ({ children, className: styles }: CompareButtonProps) => {
	return (
		<button
			className={clsx(
				'col-span-3 border border-slate-50 bg-transparent py-4 uppercase tracking-widest text-slate-300 transition duration-300 ease-in-out xs:col-span-1 lg:py-0 lg:text-xl',
				styles
			)}>
			{children}
		</button>
	);
};

export default CompareButton;
