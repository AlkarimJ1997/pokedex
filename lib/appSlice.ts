import { StateCreator } from 'zustand';
import type { ToastType } from 'react-hot-toast';

interface Toast {
	message: string;
	type: ToastType;
}

export interface AppState {
	toasts: Toast[];
	userInfo: UserInfo;
	addToast: (toast: Toast) => void;
	clearToasts: () => void;
	setUser: (userInfo: UserInfo) => void;
}

export const createAppSlice: StateCreator<AppState> = set => ({
	toasts: [],
	userInfo: { email: '' },
	addToast: toast => set(state => ({ toasts: [...state.toasts, toast] })),
	clearToasts: () => set({ toasts: [] }),
	setUser: (userInfo: UserInfo) => set({ userInfo }),
});
