type ChartData = {
	category: string;
	key: StatType;
};

export const chartData = [
	{ category: 'Strength', key: 'strength' },
	{ category: 'Resistance', key: 'resistance' },
	{ category: 'Vulnerable', key: 'vulnerable' },
	{ category: 'Weakness', key: 'weakness' },
] as const;
