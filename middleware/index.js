const validarCampos = require('../middleware/validarCampos');
const validarJWT = require('../middleware/validarJwt');
const validaRoles = require('../middleware/validarRoles');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validaRoles,
}