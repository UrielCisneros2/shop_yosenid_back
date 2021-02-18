const { Schema, model } = require('mongoose');

const TiendaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: [
        {
            calle_numero: {
                type: String
            },
            cp: {
                type: String
            },
            colonia: {
                type: String
            },
            ciudad: {
                type: String
            },
            estado: {
                type: String
            }
    
        }
    ],
    telefono: {
        type: String,
        required: true
    },
    ubicacion: [{
        lat: String,
        lng: String
    }],
    imagenCorp: {
        type: String
    },
    activo: Boolean,
    imagenLogo:{
        type:String
    },
    linkFace: String,
    linkInsta: String,
    linkTweeter: String,
    politicas: String,
    politicasVentas: String,
    politicasEnvios: String,
    politicasDescuentos: String,
    politicasDevolucion: String,
    diasHorariosEmpresas: String,
});

module.exports = model('tienda', TiendaSchema);