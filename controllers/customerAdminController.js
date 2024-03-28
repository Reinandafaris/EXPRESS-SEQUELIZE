const { Customer } = require("../models");

const customerPage = async (req, res) => {
  try {
    const customers = await Customer.findAll();

    res.render("customers/index.ejs", {
      customers,
      message: req.flash("massage", ""),
    });
  } catch (error) {
    res.render("error.ejs", {
      massage: error.massage,
    });
  }
};

const createCustomerPage = async (req, res) => {
  try {
    res.render("customers/create.ejs");
  } catch (error) {
    res.render("error.ejs", {
      massage: error.massage,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    req.flash("massage", "Customer created successfully");
    res.redirect("/customers");
  } catch (error) {
    console.log(error.massage);
  }
};

const editCustomerPage = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.render("customers/edit.ejs", {
      customer,
    });
  } catch (error) {
    console.log(error.massage);
  }
};

const editCustomer = async (req, res) => {
  try {
    await Customer.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/customers");
  } catch (error) {
    console.log(error.massage);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    await Customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/customers");
  } catch (error) {
    console.log(error.massage);
  }
};

module.exports = {
  customerPage,
  createCustomerPage,
  createCustomer,
  editCustomerPage,
  editCustomer,
  deleteCustomer,
};
