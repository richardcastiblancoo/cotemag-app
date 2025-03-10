import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Estudiantes = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
    email: column.text({ unique: true }),
    edad: column.number(),
    genero: column.text(),
    carrera: column.text(),
    modulo: column.number(),
    promedio: column.number(),
    estado: column.text(),
  },
});

const Administradores = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
    email: column.text({ unique: true }),
  },
});

const Profesores = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
    email: column.text({ unique: true }),
  },
});

export default defineDb({
  tables: { Estudiantes, Administradores, Profesores },
});
