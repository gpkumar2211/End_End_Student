var getDBCon = require('../../common/getDBCon')
var ObjectId = require('mongodb').ObjectId
async function regStudentDAO(data) {
    console.log("regStudentDAO")
    var db = await getDBCon();
    var collection = db.collection("students")
    const result = await collection.insertOne(data)
    console.log("dao given result back to service")
    return result;
}


async function loginDAO(data) {
    const { uid, pwd } = data;
    const db = await getDBCon();
    const collection = db.collection("students")
    const result = await collection.find({ uid, pwd }).toArray()
    return result;
}

async function getStudentDAO() {
    console.log("getStudentDAO")
    var db = await getDBCon();
    var collection = db.collection("students")
    const result = await collection.find().toArray()
    return result;
}

async function updateStudentDAO(id, data) {
    var db = await getDBCon();
    var collection = db.collection("students")
    var result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
    return result;
}

async function deleteStudentDAO(id) {
    var db = await getDBCon();
    var collection = db.collection("students")
    var result = await collection.deleteOne({ _id: new ObjectId(id) })
    return result;
}
async function getStdByIdDAO(id) {
    var db = await getDBCon();
    var collection = db.collection("students")
    var result = await collection.findOne({ _id: new ObjectId(id) })
    return result;
}



module.exports = {
    getStdByIdDAO,
    loginDAO,
    regStudentDAO,
    getStudentDAO,
    updateStudentDAO,
    deleteStudentDAO
}

