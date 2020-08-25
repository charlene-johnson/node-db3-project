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

}

function update(changes, id) {

}

function remove(id) {

}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}