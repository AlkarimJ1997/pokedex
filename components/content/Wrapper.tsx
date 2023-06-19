const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='h-mainHeight bg-secondary-50 md:mx-20 md:border-x md:border-x-secondary-border'>
			{children}
		</main>
	);
};

export default Wrapper;
