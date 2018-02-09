const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
  adminFirstName: {type: String, required: true},
  adminLastName: {type: String, required: true},
  adminPassword: {type: String, required: true},
  adminEmail: {type: String, required: true},
  adminProject: {type: String, required: true},
  created: {type: Date, required: true}
})

Admin.methods.setAdminData = function (requestBody) {
  this.adminFirstName = requestBody.adminFirstName || this.adminFirstName
  this.adminLastName = requestBody.adminLastName || this.adminLastName
  this.adminPassword = requestBody.adminPassword || this.adminPassword
  this.adminEmail = requestBody.adminEmail || this.adminEmail
  this.adminProject = requestBody.adminProject || this.adminProject
}

Admin.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('Admin', Admin)
