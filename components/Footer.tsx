import { MdOutlinePowerSettingsNew } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='grid grid-cols-[5rem_auto_5rem] border-t border-t-[rgba(255,255,255,0.23)]'>
			<div className='flex items-center justify-center'>

      </div>
			<div className='border-x border-x-[rgba(255,255,255,0.23)]'></div>
			<div className='flex items-center justify-center'>
				<MdOutlinePowerSettingsNew size={32} className='cursor-pointer text-white' />
			</div>
		</footer>
	);
};

export default Footer;
