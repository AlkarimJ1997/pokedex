import { StateCreator } from 'zustand';
import type { ToastType } from 'react-hot-toast';

interface Toast {
	message: string;
	type: ToastType;
}

export interface AppState {
	toasts: Toast[];
	addToast: (toast: Toast) => void;
	clearToasts: () => void;
}

export const createAppSlice: StateCreator<AppState> = set => ({
	toasts: [],
	addToast: toast => set(state => ({ toasts: [...state.toasts, toast] })),
	clearToasts: () => set({ toasts: [] }),
});
