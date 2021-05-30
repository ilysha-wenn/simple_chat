module.exports = {
    database : {
        url: process.env.DB_URL || 'mongodb+srv://user:user@cluster0.xpvfs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    },
    server: {
        PORT : process.env.PORT || 5000,
        SECRET_KEY: process.env.SECRET_KEY || 'ninja'
    }
}