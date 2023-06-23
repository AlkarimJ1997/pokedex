interface LocationProps {
	pokemonLocations: string[];
}

const Location = ({ pokemonLocations }: LocationProps) => {
	return (
		<div className='pokemon-locations'>
			<ul
				role='list'
				className='grid h-full max-h-[85vh] w-full auto-rows-[150px] grid-cols-4 gap-4 overflow-y-scroll p-4 pt-8 text-slate-200'>
				{pokemonLocations.map(location => (
					<li
						key={location}
						className='flex cursor-pointer items-center justify-center rounded-xl bg-slate-800 p-8 text-xl'>
						{location}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Location;
