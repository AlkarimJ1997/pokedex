type ChartData = {
	category: string;
	key: StatType;
};

export const chartData = [
	{ category: 'Strengths', key: 'strength' },
	{ category: 'Weaknesses', key: 'weakness' },
	{ category: 'Resistances', key: 'resistance' },
	{ category: 'Vulnerabilities', key: 'vulnerable' },
] as const;
