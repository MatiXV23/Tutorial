import { Type, Static } from "@sinclair/typebox";

export const HousingLocation = Type.Object(
  {
    id: Type.Integer(),
    nombre: Type.String(),
    city: Type.String(),
    photo: Type.String(),
    availableUnits: Type.Integer(),
    wifi: Type.Boolean(),
    laundry: Type.Boolean(),
  },
  {
    additionalProperties: false,
    examples: [
      {
        id: 1,
        nombre: 'Acme Fresh Housing',
        city: 'Chicago',
        photo: '../../../assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
        availableUnits: 3,
        wifi: true,
        laundry: true,
      },
    ],
  }
);

export const HousingLocationPost = Type.Object(
  {
    nombre: Type.String(),
    city: Type.String(),
    photo: Type.String(),
    availableUnits: Type.Integer(),
    wifi: Type.Boolean(),
    laundry: Type.Boolean(),
  },
  {
    examples: [
      {
        nombre: 'Acme Fresh Housing2',
        city: 'Chicago',
        photo: '../../../assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
        availableUnits: 3,
        wifi: true,
        laundry: true,
      },
      {
        username: "nuevo2",
        email: "nuevo2@desafio.com",
        contraseña: "@Nuevo2",
        contraseña2: "@Nuevo2",
      },
      {
        username: "nuevo3",
        email: "nuevo2@desafio.com",
        contraseña: "@Nuevo3",
        contraseña2: "@Nuevo3",
      },
    ],
  }
);

export type HousingLocation = Static<typeof HousingLocation>;
export type HousingLocationPost = Static<typeof HousingLocationPost>;
