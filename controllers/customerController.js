const { Customer } = require("../models");

const createCustomer = async (req, res) => {
  // destructuring object
  const { name, age, email, city } = req.body;
  try {
    const newCustomer = await Customer.create({
      name,
      age,
      email,
      city,
    });

    res.status(200).json({
      status: "success",
      data: {
        newCustomer,
      },
      message: "Customer created successfully",
    });
  } catch (error) {
    console.log(error.massage);
  }
};

module.exports = {
  createCustomer,
};
