var jwt = require('jsonwebtoken')
var { getStudentDAO, regStudentDAO, getStdByIdDAO, loginDAO, updateStudentDAO, deleteStudentDAO } = require('../dao/studentDAO')
async function regStudentService(data) {
    console.log("regStudentService")
    var result = await regStudentDAO(data);
    console.log('service recive the result from dao send to controller')
    return result;
}

async function loginService(data) {
    const result = await loginDAO(data)
    if (result.length) {
        var token = jwt.sign(data, "appToken")
        delete result[0].pwd;
        result[0].token = token
    }
    return result;
}

async function getStudentService() {
    console.log("getStudentService")
    var result = await getStudentDAO();
    result = result.map((obj) => {
        delete obj.pwd
        return obj;
    })
    return result;
}

async function updateStudentService(id, data) {
    var result = await updateStudentDAO(id, data)
    return result;
}

async function deleteStudentService(id) {
    var result = await deleteStudentDAO(id)
    return result;
}

async function getStdByIdService(id) {
    var result = await getStdByIdDAO(id)
    return result;
}


module.exports = {
    getStdByIdService,
    regStudentService,
    getStudentService,
    loginService,
    updateStudentService,
    deleteStudentService
}

