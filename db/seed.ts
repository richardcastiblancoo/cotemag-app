import { db, Estudiantes, Administradores, Profesores } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Administradores).values([
		{ id: 1, 
		  name: 'angello', 
		  email: 'angellodaniel2@gmail.com'
		},
	]);

	await db.insert(Profesores).values([
		{ id: 1, 
		  name: 'daconte', 
		  email: ''},
	])

}
