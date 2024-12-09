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

INSERT INTO public.usuarios (email, nombre, contraseña, is_admin)
VALUES('ej@ej.com', 'Matias', crypt('123', gen_salt('bf')), true) 
ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    city TEXT NOT NULL,
    photo TEXT NOT NULL,
    units INT NOT NULL,  
    wifi BOOLEAN NOT NULL DEFAULT false,
    laundry BOOLEAN NOT NULL DEFAULT false
);

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Acme Fresh Housing', 'Chicago', 'bernard-hermant-CLKGGwIBTaY-unsplash.jpg', 4, true, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('A113 Transition Housing', 'Santa Monica', 'brandon-griggs-wR11KBaB86U-unsplash.jpg', 0, false, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Warm Beds Housing', 'Juneau', 'i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg', 1, false, false)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Homesteady Housing', 'Chicago', 'ian-macdonald-W8z6aiwfi1E-unsplash.jpg', 1, true, false)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Happy Homes Group', 'Gary', 'krzysztof-hepner-978RAXoXnH4-unsplash.jpg', 1, true, false)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Apartment Group', 'Oakland', 'r-architecture-JvQ0Q5IkeMM-unsplash.jpg', 2, true, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Seriously Safe Towns', 'Oakland', 'phil-hearing-IYfp2Ixe9nM-unsplash.jpg', 5, true, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Hopeful Housing', 'Oakland', 'r-architecture-GGupkreKwxA-unsplash.jpg', 2, true, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Seriously Safe Towns', 'Oakland', 'saru-robert-9rP3mxf8qWI-unsplash.jpg', 10, false, false)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry)
VALUES('Capital Safe Towns', 'Portland', 'webaliser-_TPTXZd9mOo-unsplash.jpg', 6, true, true)
ON CONFLICT DO NOTHING;