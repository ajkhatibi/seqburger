var db = require("../models");



// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    console.log('yo');
    // var query = {};
    // if (req.query.burgers_id) {
    //   query.burgersId = req.query.burgers_id;
    // }

    // db.Post.findAll({
    //   where: query,
    //   include: [db.burgers]
    // }).then(function(dbPost) {
    //   res.json(dbPost);
    // });
    res.render("index", null);
  });

  // Get rotue for retrieving a single post
  // app.get("/", function(req, res) {

  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.burgers]
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // POST route for saving a new post
  // app.post("/api/posts", function(req, res) {
  //   db.Post.create({
  //     burger_name: req.body.burger_name,
  //     devoured: false
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
};