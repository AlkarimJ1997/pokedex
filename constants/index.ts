import { fetchImages } from '@/utils/helpers';

export const API_URL = 'https://pokeapi.co/api/v2';
export const POKEMON_URL = `${API_URL}/pokemon?limit=5000`;

export const images = fetchImages(
	require.context('../assets/pokemons/shiny', false, /\.(png|jpe?g|svg)$/)
);

export const defaultImages = fetchImages(
	require.context('../assets/pokemons/default', false, /\.(png|jpe?g|svg)$/)
);
