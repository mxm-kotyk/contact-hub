const notFound = (req, res) => {
  res.status(404);
  res.json({ status: "Error", statusCode: 404, message: "Not Found" });
};

export default notFound;
