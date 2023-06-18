const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='mx-20 border-x border-x-secondary-border bg-secondary-50'>
			{children}
		</main>
	);
};

export default Wrapper;
