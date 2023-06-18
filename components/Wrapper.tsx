const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='min-h-[90vh] border-x border-x-secondary-border bg-secondary-50 md:mx-20'>
			{children}
		</main>
	);
};

export default Wrapper;
