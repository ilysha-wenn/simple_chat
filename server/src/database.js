const mongoose = require('mongoose');

module.exports.init = async(config) => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    };
    try{
        const url = config.database.url;
        console.log('Подключение к БД');
        await mongoose.connect(url, options);
        console.log('Успешно');
    }catch (error){
        console.log('Нельзя подключиться к БД: ', error);
        throw error;
    }
    return mongoose.connection;
}