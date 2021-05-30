const message = require('./model');
const userModel = require('../user/model')

module.exports.Create = async (post, req, res, next) =>{
        const {text, user} = post;
        const userAuthor = await userModel.findOne({username: user});
        if(!userAuthor) res.json({message: "Нет автора"});

        const NewMessage = new message({text, user: userAuthor.username});
        await NewMessage.save();
}

module.exports.List = async () =>{
        const messages = message.find();
        return messages;
}
