const {Schema, model} = require ("mongoose");

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        birthDate: {
            type: Date,
            required: true
        },
        species: {
            type: String
        },
        breed: {
            type: String
        },
        size: {
            type: String,
            enum: ["grande", "mediano", "pequeño"]
        },
        weight: {
            type: Number
        },
        neutered: {
            type: Boolean
        },
        createdBy: {
           type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
)
const Pet = model("Pet", petSchema);
module.exports = Pet;