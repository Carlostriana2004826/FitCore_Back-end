const userServices = require("../services/auth.service")

const login =  async (req, res)  => {
    const inputData = req.body
    try{
        const userFound = await userServices.findUserById(inputData.cedula);
        if(! userFound){
            return res.status(404).json({
                ok:false,
                msg:'Error porfavor registrarse'
            });
        }

        // const isValiedPassword = 
    }catch(error){
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: 'Error interno del servidor'
        }); 
    }

} 

const register = async  (req, res) => {
    const inputData = req.body
    try{
        const userFound = await userServices.findUserById(inputData.cedula)
    if(userFound){
        return res.status(409).json({
            ok:false,
            msg:'Erro el usuario ya esta registrado'
        })
    }

    const foundRole = await userServices.findRolUser("USER");

    if (!foundRole) {
        return res.status(500).json({
            ok: false,
            msg: "El rol por defecto no existe"
        });
    }

    const dataRegister = {
        cedula: inputData.cedula,
        nombre: inputData.nombre,
        email: inputData.email,
        password_hash: inputData.password_hash,
        telefono: inputData.telefono,
        rol_id: foundRole.id
    };

    const createUser = await userServices.userCreated(dataRegister);
    if (createUser){
        return res.status(201).json({
        ok: true,
        user: userCreated
    });
    }
    
    
    }catch (error){
        console.log(error)
    }
}

module.exports = {
    login,
    register
}