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
    }catch(error){
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: 'Error interno del servidor'
        }); 
    }

} 

const register = (req, res) => {
    const inputData = req.body
}

module.exports = {
    login,
    register
}