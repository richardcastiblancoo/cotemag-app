import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Administrador = defineTable({
  columns: {
    id: column.text({primaryKey:true}),
    email: column.text({unique:true}),
    username: column.text({unique:true}),
});

const Estudiantes = defineTable({
  columns:{
    id: column.text({primaryKey:true}),
    identidad: column.text({unique:true}),
    nombre: column.text(),
    apellido: column.text(),
    email: column.text({unique:true}),
    telefono: column.text(),
    direccion: column.text(),
    fecha_nacimiento: column.text(),
    genero: column.text(),
    estado: column.text(),
    id_carrera: column.text(),
    id_facultad: column.text(),
    id_universidad: column.text(),
    password: column.text(),
});


export default defineDb({
  tables: {}
});
