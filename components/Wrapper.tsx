const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='border-x-[rgba(255,255,255,0.203)] mx-20 h-[90vh] border-x-[0.5px]'>
			{children}
		</div>
	);
};

export default Wrapper;
