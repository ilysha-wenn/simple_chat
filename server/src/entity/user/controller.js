const service = require('./service');
const ApiError = require('../../error/ApiError');

module.exports.Register = async (req, res, next) =>{
    try{
        const userReg = await service.Register(req.body);
        return res.json({message: "Успешно"});
    }catch (error){
        next(ApiError.forbidden(error.message));
    }
}

module.exports.Login = async (req, res, next) =>{
    try{
        const userLog = await service.Login(req.body);
        return res.json({message: "Успешно"});
    }catch (error){
        next(ApiError.forbidden(error.message));
    }
}