import { redirect } from 'next/navigation';

const NotFound = () => redirect('/pokemon/1');

export default NotFound;
