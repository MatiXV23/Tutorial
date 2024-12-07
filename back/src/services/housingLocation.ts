import { IPFNotFoundError } from "../errors/index.js";
import { HousingLocation, HousingLocationPost } from "../types/housingLocation.js";
import db from "./db.js";

export const findAll = async () => {
  const res = await db.query("SELECT * FROM public.locations");
  return res.rows;  
};

export const findById = async (id: number) => {
  const res = await db.query(
    "SELECT * FROM public.locations WHERE id=$1",
    [id]
  );
  if (res.rowCount === 0) throw new IPFNotFoundError("");
  return res.rows[0];
};

export const deleteById = async (id: number) => {
  const res = await db.query(
    "DELETE FROM public.locations WHERE id=$1",
    [id]
  );
  if (res.rowCount === 0) throw new IPFNotFoundError("");
};

export const updateById = async (newLocation: HousingLocation) => {
  const res = await db.query(
    `
    UPDATE public.locations  
    SET nombre=$2, city=$3, photo=$4, units=$5 , wifi=$6 , laundry=$7 
    WHERE id=$1
    RETURNING *;
    `,
    [newLocation.id ,newLocation.nombre , newLocation.city , newLocation.photo, newLocation.units, newLocation.wifi, newLocation.laundry]
    );
  if (res.rowCount === 0) throw new IPFNotFoundError("");
  return res.rows[0];
};

export const create = async (newLocation: HousingLocationPost) => {
  const res = await db.query(
    `
    INSERT INTO public.locations (nombre, city, photo, units, wifi, laundry) 
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *;
    `,
    [newLocation.nombre , newLocation.city , newLocation.photo, newLocation.units, newLocation.wifi, newLocation.laundry]
  );
  return res.rows[0];
}; 