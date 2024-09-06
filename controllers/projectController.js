const Project = require('../models/projectModel');

// Save new project
exports.saveProject = async (req, res) => {
  const { projectID, projectName, assignedTo, assignmentDate, deadline } = req.body;

  try {
    const project = new Project({ projectID, projectName, assignedTo, assignmentDate, deadline });
    await project.save();
    res.status(201).json({ message: 'Project saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving project', error });
  }
};

// Update project
exports.updateProject = async (req, res) => {
  const { projectID, projectName, assignedTo, assignmentDate, deadline } = req.body;

  try {
    await Project.findOneAndUpdate(
      { projectID },
      { projectName, assignedTo, assignmentDate, deadline },
      { new: true }
    );
    res.status(200).json({ message: 'Project updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error });
  }
};

// Get project by projectID
exports.getProject = async (req, res) => {
  const { projectID } = req.params;

  try {
    const project = await Project.findOne({ projectID });
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error });
  }
};
