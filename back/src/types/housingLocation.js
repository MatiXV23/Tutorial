"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousingLocationPost = exports.HousingLocation = void 0;
var typebox_1 = require("@sinclair/typebox");
exports.HousingLocation = typebox_1.Type.Object({
    id: typebox_1.Type.Integer(),
    nombre: typebox_1.Type.String(),
    city: typebox_1.Type.String(),
    photo: typebox_1.Type.String(),
    units: typebox_1.Type.Integer(),
    wifi: typebox_1.Type.Boolean(),
    laundry: typebox_1.Type.Boolean(),
}, {
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
});
exports.HousingLocationPost = typebox_1.Type.Object({
    nombre: typebox_1.Type.String(),
    city: typebox_1.Type.String(),
    photo: typebox_1.Type.String(),
    units: typebox_1.Type.Integer(),
    wifi: typebox_1.Type.Boolean(),
    laundry: typebox_1.Type.Boolean(),
}, {
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
});
