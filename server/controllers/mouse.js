const Mouse = require('../database/models/Mouse.js');


exports.addMouse = (req, res) => {
  Mouse.create({
    productName: req.body.productName,
    mouseGrip: req.body.mouseGrip,
    interface: req.body.interface,
    weight: req.body.weight,
    price: req.body.price,
    amazonLink: req.body.amazonLink,
    mouseSize: req.body.mouseSize,
    imageURL: req.body.imageURL
  }, (err, result) => {
    if (err) {
      console.log(err)
      res.status(418).send('Invalid input')
    } else {
      res.status(200).send('Mouse Added!')
    }
  })
}