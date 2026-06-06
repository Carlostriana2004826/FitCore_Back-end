const {client} = require("../config/config/")

const findUserById = async(cedula) => {
    const result  = await client.query(
        "SELECT * FROM usuarios WHERE cedula = $1",
        [cedula]
    );
    return result.rows[0];
};

module.exports = {
    findUserById
}