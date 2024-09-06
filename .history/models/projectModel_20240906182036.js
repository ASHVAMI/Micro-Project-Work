const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectID: { type: String, required: true, unique: true },
  projectName: { type: String, required: true },
  assignedTo: { type: String, required: true },
  assignmentDate: { type: Date, required: true },
  deadline: { type: Date, required: true }
});

module.exports = mongoose.model('Project', ProjectSchema);
