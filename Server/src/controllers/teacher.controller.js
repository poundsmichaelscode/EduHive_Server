exports.createTeacher = async (req, res) => {
  res.json({ message: "Create teacher" });
};

exports.getTeachers = async (req, res) => {
  res.json({ message: "Get all teachers" });
};

exports.getTeacher = async (req, res) => {
  res.json({ message: "Get single teacher" });
};

exports.updateTeacher = async (req, res) => {
  res.json({ message: "Update teacher" });
};

exports.deleteTeacher = async (req, res) => {
  res.json({ message: "Delete teacher" });
};
