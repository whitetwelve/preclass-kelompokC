const express = require('express')
const router = express.Router()

const { getCollection, getCollectionUser, addTask, addCollection } = require('../controllers/collection')
const { getUsers, addUsers } = require('../controllers/user')

router.get('/users', getUsers)
router.post('/users', addUsers)

router.get('/collection/:id', getCollection)
router.get('/collectionUser/:id', getCollectionUser)
router.post('/collection', addCollection)

router.post('/task', addTask)


module.exports = router