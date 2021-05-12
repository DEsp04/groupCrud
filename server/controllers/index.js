const CarBrand = require("../models/carBrand");
const CarModel = require("../models/carModel");


//requests for brand

const createBrand = async (req, res) => {
  try {
    const brand = await new CarBrand(req.body);
    await brand.save();
    return res.status(201).json({ brand });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


const getAllBrands = async (req, res) => {
  try {
    const brands = await CarBrand.find();
    return res.status(200).json({ brands });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


const getBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await CarBrand.findById(id);
    if (brand) {
      return res.status(200).json({ brand });  
    }
    return res.status(404).send("brand not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    await CarBrand.findByAndUpdate(
      id,
      req.body,
      { new: true },
      (err, brand) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!brand) {
          res.status(500).send("brand not found")
        }
        return res.status(200).json(brand);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CarBrand.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("brand deleted");
    }
    throw new Error("brand not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//request for carmodels

const createCar = async (req, res) => {
  try {
    const car = await new CarModel(req.body);
    await car.save();
    return res.status(201).json({ CaretPosition });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


const getAllCars = async (req, res) => {
  try {
    const cars = await CarModel.find();
    return res.status(200).json({ cars });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await CarModel.findById(id);
    if (car) {
      return res.status(200).json({ car });  
    }
    return res.status(404).send("car not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    await CarModel.findByAndUpdate(
      id,
      req.body,
      { new: true },
      (err, car) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!car) {
          res.status(500).send("car not found")
        }
        return res.status(200).json(car);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CarModel.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("car deleted");
    }
    throw new Error("car not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};



module.exports = {
  createBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
