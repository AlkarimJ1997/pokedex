import { MdOutlinePowerSettingsNew } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='grid grid-cols-[5rem_auto_5rem] place-items-center border-t border-t-secondary-border'>
			<div />
			<ul
				role='list'
				className='flex h-full w-full border-x border-x-secondary-border'>
				<li>A</li>
				<li>A</li>
				<li>A</li>
				<li>A</li>
			</ul>
			<div>
				<MdOutlinePowerSettingsNew
					size={32}
					className='cursor-pointer text-red-500'
				/>
				<span className='sr-only'>Logout</span>
			</div>
		</footer>
	);
};

export default Footer;
