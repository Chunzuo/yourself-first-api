const { Review } = require("../models");

exports.add = (req, res) => {
  new Review(req.body)
    .save()
    .then(newReview => {
      res.status(200).json(newReview);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.list = (req, res) => {
  Review.find()
    .then(list => {
      res.status(200).json(list);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.update = (req, res) => {
  Review.updateOne(
    {
      _id: req.body._id
    },
    req.body
  )
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.delete = (req, res) => {
  Review.deleteOne({
    _id: req.params.id
  })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
