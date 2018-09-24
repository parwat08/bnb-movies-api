import _ from "lodash";
import {
  getcinemas as getcinemasQ,
  postcinema as postcinemaQ,
  getcinemaByID as getcinemaByIDQ,
  updatecinemaByID as updatecinemaByIDQ,
  deletecinemaByID as deletecinemaByIDQ
} from "../query/cinema.query";

export function getcinemaByID(req, res, next) {
  let cinemaID = req.params.cinemaID;

  getcinemaByIDQ(cinemaID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function getcinemas(req, res, next) {
  let params = _.pick(req.body, []);

  getcinemasQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      re.status(400).send(err);
    });
}

export function postcinema(req, res, next) {

  req.checkBody("name", "name must be inserted!").notEmpty();
  req.checkBody("address", "address must be inserted!").notEmpty();

  let errors = req.validationErrors();
  if (errors) return res.status(400).send(errors);

  let params = _.pick(req.body, ["name", "address"]);

  postcinemaQ(params)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function updatecinemaByID(req, res, next) {
  let cinemaID = req.params.cinemaID;

  let params = _.pick(req.body, ["cinema_name", "cinema_address"]);

  updatecinemaByIDQ(params, cinemaID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

export function deletecinemaByID(req, res, next) {
  let cinemaID = req.params.cinemaID;

  deletecinemaByIDQ(cinemaID)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}