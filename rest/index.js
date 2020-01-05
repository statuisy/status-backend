export default app => {
    // public
    app.route('/api').get((req, res) => {
      res.json({ message: "Server is up and running" });
    });
}