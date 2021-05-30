const service = require('./service');
const ApiError = require('../../error/ApiError');

module.exports.Create = async (req, res, next) =>{
    try {
        const message = await service.Create(req.body);
        return res.json({message: "Успешно"});
    }catch (error){
        next(ApiError.badRequest(error.message));
    }
}

module.exports.List = async (req, res, next) =>{
    try {
        const list = await service.List();
        return res.json({message: "Успешно"});
    }catch (error){
        next(ApiError.badRequest(error.message));
    }
}