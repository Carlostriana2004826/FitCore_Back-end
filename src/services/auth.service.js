const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

const findUserById = async (cedula) => {
    return await prisma.usuarios.findUnique({
        where: {
            cedula
        }
    });
};

const findRolUser = async (rol) => {
    return await prisma.rol.findUnique({
        where: {
            nombre_rol: rol
        }
    });
};

const userCreated = async (dataRegister) => {
    return await prisma.usuarios.create({
        data: dataRegister
    });
};

module.exports = {
    findUserById,
    findRolUser,
    userCreated
}
