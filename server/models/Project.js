const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema({
  name: { type: String, required: true},
  developer: { type: String, required: true},
  address: String,
  created: { type: Date, required: true}
})

Project.methods.setProjectData = function (requestBody) {
  this.name = requestBody.name || this.name
  this.developer = requestBody.developer || this.developer
  this.address = requestBody.address || this.address
}

Project.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Project', Project)