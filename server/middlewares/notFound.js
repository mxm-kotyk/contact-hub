const notFound = (req, res) => {
  res.status(404);
  res.json({ code: 404, message: "Not Found" });
};

export default notFound;
