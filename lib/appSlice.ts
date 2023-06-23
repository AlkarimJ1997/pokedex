import { StateCreator } from 'zustand';
import type { ToastType } from 'react-hot-toast';
import { pokemonTabs } from '@/constants';

interface Toast {
	message: string;
	type: ToastType;
}

export interface AppState {
	toasts: Toast[];
	userInfo: UserInfo;
	pokemonTab: keyof typeof pokemonTabs;
	addToast: (toast: Toast) => void;
	clearToasts: () => void;
	setUser: (userInfo: UserInfo) => void;
	setPokemonTab: (pokemonTab: keyof typeof pokemonTabs) => void;
}

export const createAppSlice: StateCreator<AppState> = set => ({
	toasts: [],
	userInfo: { email: '' },
	pokemonTab: 'description',
	addToast: toast => set(state => ({ toasts: [...state.toasts, toast] })),
	clearToasts: () => set({ toasts: [] }),
	setUser: (userInfo: UserInfo) => set({ userInfo }),
	setPokemonTab: pokemonTab => set({ pokemonTab }),
});
