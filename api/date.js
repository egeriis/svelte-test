module.exports = (req, res) => {
  const date = `Hello ${new Date().toString()}`;
  res.status(200).send(date);
};
