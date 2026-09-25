const hello = (req, res) => {
  res.status(200);
  res.json({hello})
}

module.exports = {
  hello,
}