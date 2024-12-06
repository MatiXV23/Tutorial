CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    nombre TEXT NOT NULL,
    contraseña TEXT NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT false
);

INSERT INTO public.usuarios (email, nombre, contraseña, is_admin)
VALUES('admin@desafio.com', 'admin', crypt('@Admin1', gen_salt('bf')), true) 
ON CONFLICT DO NOTHING;