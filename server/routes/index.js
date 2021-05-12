const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();


router.get("/", (req, res) => res.send("This is root!"));


router.post("/carBrands", controllers.createBrand);

router.get("/carBrands", controllers.getAllBrands);

router.get("/carBrands/:id", controllers.getBrandById);

router.put("/carBrands/:id", controllers.updateBrand);

router.delete("/carBrands/:id", controllers.deleteBrand);

router.post("/carModels", controllers.createCar);

router.get("/carModels", controllers.getAllCars);

router.get("/carModels/:id", controllers.getCarById);

router.put("/carModels/:id", controllers.updateCar);

router.delete("/carModels/:id", controllers.deleteCar);


module.exports = router;