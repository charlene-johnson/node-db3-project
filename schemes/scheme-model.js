const db = require("../data/config")

function find() {
    return db("schemes") 
}

function findById(id) {
    return db("schemes")
    .where("id", id)
    .first()
}

function findSteps(id) {
    return db("steps")
    .innerJoin("schemes", "schemes.id", "steps.scheme_id")
    .where("steps.scheme_id", id)
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .orderBy("steps.step_number")
    
}

function add(scheme) {
    return db("schemes")
    .insert(scheme)
    .then(ids => {
        return findById(ids[0])
    })
}

function update(changes, id) {
    return db("schemes")
    .update(changes)
    .where("id", id)
}

function remove(id) {
    return db("schemes")
    .where("id", id)
    .del()
    
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}