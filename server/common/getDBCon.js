var mongo = require('mongodb')
async function getDBCon() {
    var url = "mongodb+srv://u1:p1@9am.3fvtyjc.mongodb.net/"
    // MongoDB server- Database - collection - document
    var mongoClient = mongo.MongoClient
    var server = await mongoClient.connect(process.env.DB_CONN_URL)
    var db = server.db("school")
    return db;
}

module.exports = getDBCon