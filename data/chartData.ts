type ChartData = {
	category: string;
	key: StatType;
};

export const chartData = [
	{ category: 'Strength', key: 'strength' },
	{ category: 'Weakness', key: 'weakness' },
	{ category: 'Resistance', key: 'resistance' },
	{ category: 'Vulnerable', key: 'vulnerable' },
] as const;
