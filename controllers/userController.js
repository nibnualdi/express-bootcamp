function shows(req, res) {
  res.json({ name: "John", age: 17, gender: "Male" });
}

module.exports = { shows };
