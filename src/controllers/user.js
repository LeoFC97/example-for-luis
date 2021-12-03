function getAllUsers(req,res) {
    return res.status(200).send({message:'Usuarios encontrados: '});
}

module.exports = {
    getAllUsers
}
