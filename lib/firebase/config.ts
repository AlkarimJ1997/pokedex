import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyB_K6UfWj8CCg28_moRmkvXRgczxplIoGw',
	authDomain: 'pokedex-9a2fc.firebaseapp.com',
	projectId: 'pokedex-9a2fc',
	storageBucket: 'pokedex-9a2fc.appspot.com',
	messagingSenderId: '1024885366168',
	appId: '1:1024885366168:web:1bf2863a9e8ef767a11fed',
	measurementId: 'G-4Z94RZCRL9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const usersCollection = collection(db, 'users');
const pokemonCollection = collection(db, 'pokemonList');

export { auth, db, usersCollection, pokemonCollection };
