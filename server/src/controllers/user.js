const { users_tb, task_tb, collections_tb } = require("../../models")


exports.getUsers = async (req, res) => {
    try {
        let data = await users_tb.findAll({
            include : {
                model : collections_tb,
                as : "collections"
            },
            attributes : {
                exclude : ["password", "createdAt", "updatedAt"]
            }
        })

        res.send({
            status : "Succes",
            message : "Data berhasil ditamilkan!",
            data
        })
    } catch (error) {
        console.log(error);
    }
}

exports.addUsers = async (req, res) => {
    try {
        let data = await users_tb.create(req.body)

        res.send({
            status : "Success",
            message : "Data user berhasil ditambahkan!",
            data
        })
    } catch (error) {
        console.log(error)
        res.send({
            status : 'failed',
            message : "Server Error"
        })
    }
}