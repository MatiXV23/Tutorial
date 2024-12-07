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

CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    city TEXT NOT NULL,
    photo TEXT NOT NULL,
    availableUnits INT,  
    wifi BOOLEAN NOT NULL DEFAULT false,
    laundry BOOLEAN NOT NULL DEFAULT false
);

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Acme Fresh Housing', 'Chicago', '../../../assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg', 4, true, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('A113 Transition Housing', 'Santa Monica', '../../../assets/brandon-griggs-wR11KBaB86U-unsplash.jpg', 0, false, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Warm Beds Housing', 'Juneau', '../../../assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg', 1, false, false)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Homesteady Housing', 'Chicago', '../../../assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg', 1, true, false)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Happy Homes Group', 'Gary', '../../../assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg', 1, true, false)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Apartment Group', 'Oakland', '../../../assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg', 2, true, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Seriously Safe Towns', 'Oakland', '../../../assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg', 5, true, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Hopeful Housing', 'Oakland', '../../../assets/r-architecture-GGupkreKwxA-unsplash.jpg', 2, true, true)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Seriously Safe Towns', 'Oakland', '../../../assets/saru-robert-9rP3mxf8qWI-unsplash.jpg', 10, false, false)
ON CONFLICT DO NOTHING;

INSERT INTO public.locations (nombre, city, photo, availableUnits, wifi, laundry)
VALUES('Capital Safe Towns', 'Portland', '../../../assets/webaliser-_TPTXZd9mOo-unsplash.jpg', 6, true, true)
ON CONFLICT DO NOTHING;