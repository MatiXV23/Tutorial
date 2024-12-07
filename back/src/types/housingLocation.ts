import { Type, Static } from "@sinclair/typebox";

export const HousingLocation = Type.Object(
  {
    id: Type.Integer(),
    nombre: Type.String(),
    city: Type.String(),
    photo: Type.String(),
    units: Type.Integer(),
    wifi: Type.Boolean(),
    laundry: Type.Boolean(),
  },
  {
    additionalProperties: false,
    examples: [
      {
        id: 1,
        nombre: 'Acme Fresh Housing1',
        city: 'Chicago',
        photo: '../../../assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
        units: 3,
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
    units: Type.Integer(),
    wifi: Type.Boolean(),
    laundry: Type.Boolean(),
  },
  {
    examples: [
      {
        nombre: 'Acme Fresh Housing2',
        city: 'Chicago',
        photo: '../../../assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
        units: 3,
        wifi: true,
        laundry: true,
      },
    ],
  }
);

export type HousingLocation = Static<typeof HousingLocation>;
export type HousingLocationPost = Static<typeof HousingLocationPost>;
