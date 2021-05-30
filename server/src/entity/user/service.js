const User = require('./model');
const bcrypt = require('bcrypt');

module.exports.Register = async (user, req, res, next) =>{
    const {email, username, password} = user;
    const candidate = await User.findOne({email});
    if(candidate) return res.status(401).json({message: "Почтовый адресс занят"});
    const hashPassword = bcrypt.hashSync(password, 5);
    const newUser = new User({email, username, hashPassword});
    await newUser.save();
}

module.exports.Login = async (user, req, res, next) =>{
    const {email, password} = user;
    const candidate = await User.findOne({email});
    if(!candidate) return res.status(401).json({message: "Не существует почтового адресса"});
    const validPassword = bcrypt.compareSync(password, user.password);
    if(!validPassword) return res.status(401).json({message: "Не верный пароль"});
}