const User = require('../entity/user/model');
const ApiError = require('../error/ApiError');

module.exports.LIST = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.json({ message: "Комната 1", users});
    } catch (error) {
        next(ApiError.badRequest(error.message));
    }
}