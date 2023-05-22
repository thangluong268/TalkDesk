const StaffModel = require("../models/Staff");

class Admin {
  // get all staff state true [GET] /admin/getAllStaff?pageSize=5&pageIndex=2&search=abc
  getAllStaff(req, res, next) {
    const pageSize = parseInt(req.query.pageSize);
    const pageIndex = parseInt(req.query.pageIndex);
    const search = req.query.search;

    const query = search
      ? { state: true, name: { $regex: search, $options: "i" } }
      : { state: true };

    Promise.all([
      StaffModel.countDocuments(query),
      StaffModel.find(query)
        .skip((pageIndex - 1) * pageSize)
        .limit(pageSize),
    ])
      .then(([total, staff]) => {
        res.json({ total, staff });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  // get all deleted staff state true [GET] /admin/getAllDeletedStaff
  getAllDeletedStaff(req, res, next) {
    StaffModel.find({ state: false })
      .then((staff) => {
        res.json(staff);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  // change status of staff [PUT] /admin/deleteStaff/:id
  deleteStaff(req, res, next) {
    StaffModel.findByIdAndUpdate(req.params.id, { state: false })
      .then((staff) => {
        res.json(staff);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  // add staff [POST] /admin/addStaff
  addStaff(req, res, next) {
    StaffModel.findOne({ email: req.body.email })
      .then((staff) => {
        if (staff) res.status(404).send("Email đã tồn tại");
        else {
          const staff = req.body;
          const newStaff = new StaffModel(staff);
          newStaff.save();
          res.json(staff);
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }

  // edit staff [PUT] /admin/editStaff/:id
  editStaff(req, res, next) {
    StaffModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
    })
      .then((staff) => {
        res.json(staff);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  // change status of staff [PUT] /admin/restoreStaff/:id
  restoreStaff(req, res, next) {
    StaffModel.findByIdAndUpdate(req.params.id, { state: true })
      .then((staff) => {
        res.json(staff);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  // delete staff [DELETE] /admin/destroyStaff/:id
  destroyStaff(req, res, next) {
    StaffModel.findByIdAndDelete(req.params.id)
      .then((staff) => {
        res.json(staff);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Admin();
