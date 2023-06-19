import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (callback: () => void, delay: number) => {
	const callbackRef = useRef(callback);
	const timeoutRef = useRef<NodeJS.Timeout>();

	const set = useCallback(() => {
		timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
	}, [delay]);

	const clear = useCallback(() => {
		timeoutRef.current && clearTimeout(timeoutRef.current);
	}, []);

	const reset = useCallback(() => {
		clear();
		set();
	}, [clear, set]);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		set();
		return clear;
	}, [delay, set, clear]);

	return { reset, clear };
};

export default useTimeout;
