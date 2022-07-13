const { users_tb, task_tb, collections_tb } = require("../../models")


exports.getCollection = async (req, res) => {
    try {
        const id = req.params.id
        let data = await collections_tb.findOne({
            where : {
                id
            },
            include : [
                {
                    model : task_tb,
                    as : 'tasks',
                }
            ]
        })
        
        res.send({
            status : 'succes',
            data
        })
    } catch (error) {
        console.error(error);
    }
}

exports.getCollectionUser = async (req, res) => {
    try {
        const id = req.params.id
        let data = await collections_tb.findOne({
            where : {
                id
            },
            include : [
                {
                    model : task_tb,
                    as : 'tasks',
                },
                {
                    model : users_tb,
                    as  : "users"
                }
            ]
        })
        
        res.send({
            status : 'succes',
            data
        })
    } catch (error) {
        console.error(error);
    }
}

exports.addCollection = async (req, res) => {
    try {
        let data = await collections_tb.create(req.body)

        res.send({
            status : "Success",
            message : "Data collection berhasil ditambahkan!",
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

exports.addTask = async (req, res) => {
    try {
        let data = await task_tb.create(req.body)

        res.send({
            status : "Success",
            message : "Task berhasil ditambahkan!",
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