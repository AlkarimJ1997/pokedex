import { useEffect } from 'react';
import useTimeout from '@/hooks/useTimeout';

const useDebounce = (
	callback: () => void,
	delay: number,
	dependencies: React.DependencyList
) => {
	const { reset, clear } = useTimeout(callback, delay);

	useEffect(reset, [...dependencies, reset]);
	useEffect(clear, [clear]);
};

export default useDebounce;
