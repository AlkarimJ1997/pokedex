interface CapableMovesProps {
	pokemonMoves: string[];
	pokemonAbilities: string[];
}

const CapableMoves = ({
	pokemonMoves,
	pokemonAbilities,
}: CapableMovesProps) => {
	return (
		<div className='p-4'>
			<h1 className='text-4xl text-slate-200 uppercase'>Abilities</h1>
			<ul
				role='list'
				className='grid h-full max-h-[85vh] w-full auto-rows-[150px] grid-cols-4 gap-4 overflow-y-scroll pt-8 text-slate-200'>
				{pokemonAbilities.map(ability => (
					<li
						key={ability}
						className='flex cursor-pointer items-center justify-center rounded-xl bg-accent p-8 text-xl'>
						{ability}
					</li>
				))}
			</ul>
			<h1 className='text-4xl text-slate-200 mt-4 uppercase'>Moves</h1>
			<ul
				role='list'
				className='grid h-full max-h-[85vh] w-full auto-rows-[150px] grid-cols-4 gap-4 overflow-y-scroll pt-8 text-slate-200 pb-[20vh]'>
				{pokemonMoves.map(move => (
					<li
						key={move}
						className='flex cursor-pointer items-center justify-center rounded-xl bg-slate-800 p-8 text-xl'>
						{move}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CapableMoves;
