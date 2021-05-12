//will import database and schema
const db = require("../db");
const Brand = require("../models/carBrand");
const CarModel = require("../models/carModel");


db.on('error', console.error.bind(console, "MongoDB Connection error:"));



const main = async () => {
 
  const carBrand1 = await new Brand({
    title: "Fiat",
    country_of_origin: "Italy",
    website_link: "https://www.fiatusa.com/",
  });
  carBrand1.save();
  
  const carBrand2 = await new Brand({
    title: "Nissan",
    country_of_origin: "Japan",
    website_link: "https://www.nissanusa.com/",
  });
  carBrand2.save();
  
  const carBrand3 = await new Brand({
    title: "Subaru",
    country_of_origin: "Japan",
    website_link: "https://www.subaru.com/",
  });
  carBrand3.save();
  
  const carBrand4 = await new Brand({
    title: "Mini",
    country_of_origin: "United Kingdom",
    website_link: "https://www.miniusa.com/",
  });
  carBrand4.save();
 
  const carBrand5 = await new Brand({
    title: "Dodge",
    country_of_origin: "United States",
    website_link: "https://www.dodge.com/",
  });
  carBrand5.save();

  const carBrand6 = await new Brand({
    title: "Chevrolet",
    country_of_origin: "United States",
    website_link: "https://www.chevrolet.com/",
  });
  carBrand6.save();

  const carBrand7 = await new Brand({
    title: "Volkswagen",
    country_of_origin: "German",
    website_link: "https://www.vw.com/en.html",
  });
  carBrand7.save();

  const carBrand8 = await new Brand({
    title: "Toyota",
    country_of_origin: "Japan",
    website_link: "https://www.toyota.com/",
  });
  carBrand8.save();

  const carBrand9 = await new Brand({
    title: "Kia",
    country_of_origin: "South Korea",
    website_link: "https://www.kia.com/us/en",
  });
  carBrand9.save();


  const carBrand10 = await new Brand({
    title: "Hyundai",
    country_of_origin: "South Korea",
    website_link: "https://www.hyundaiusa.com/us/en",
  });
  carBrand10.save();
  
  const carBrand11 = await new Brand({
    title: "Honda",
    country_of_origin: "Japan",
    website_link: "https://www.honda.com/",
  });


  carBrand11.save();


  const carBrand12 = await new Brand({
    title: "Mazda",
    country_of_origin: "Japan",
    website_link: "https://www.mazdausa.com/",
  });
  carBrand12.save();

  
  const carModels = [
    {
      model_name: "FIAT 500X",
      type_of_car: "Subcompact crossover SUV",
      car_image:
        "https://www.fiatusa.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk7GBfM9IW2VRkr72kVid9pYvwXGXQpMTV1rUEzg6OQCckPquBhS1U%25jzbTllxA0WmNlnIQFmwFDkpd2ATBoM&&pov=fronthero&width=1005&height=400&bkgnd=white&resp=jpg&cut=&x=1700&y=1900&w=6500&h=6500",
      car_brand: carBrand1._id,
    },
    {
      model_name: "FIAT 500L",
      type_of_car: "Compact Minivan",
      car_image:
        "https://www.fiatusa.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk7GBfM9IW2VRkr72kVid9pMnwXGXQpMTV1rUjLg6OQCckPquBhS1UGbzbTllxA01Hejn0QFmwFEkpd2LYBoMAoj&&pov=fronthero&width=1005&height=400&bkgnd=white&resp=jpg&cut=&x=1700&y=1900&w=6500&h=6500",
      car_brand: carBrand1._id,
    },
    {
      model_name: "Nissan GT-R",
      type_of_car: "Sport Sedan",
      car_image:
        "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/overview/2021-nissan-gtr-50th-anniversary-edition.jpg",
      car_brand: carBrand2._id,
    },
    {
      model_name: "Nissan Pathfinder",
      type_of_car: "SUV",
      car_image:
        "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/pathfinder/2020/overview/gallery-promo/red-nissan-pathfinder.png",
      car_brand: carBrand2._id,
    },
    {
      model_name: "Subaru Impreza",
      type_of_car: "Hatchback",
      car_image:
        "https://www.subaru.com/content/dam/subaru/vehicles/2021/IMP/vsp/exterior-360/NAA/NAA_023.jpg",
      car_brand: carBrand3._id,
    },
    {
      model_name: "Subaru WRX",
      type_of_car: "Sport Compact",
      car_image:
        "https://www.subaru.com/content/dam/subaru/vehicles/2021/WRX/vsp/exterior-360/M7Y/M7Y_023.jpg",
      car_brand: carBrand3._id,
    },
    {
      model_name: "MINI SE Hardtop",
      type_of_car: "Subcompact car",
      car_image:
        "https://www.miniusa.com/content/dam/mini/why-mini/why-mini/Performance/Countryman.jpg.miniusaimg.small.jpeg",
      car_brand: carBrand4._id,
    },
    {
      model_name: "MINI Cooper Clubman",
      type_of_car: "Compact car",
      car_image:
        "https://cache.miniusa.com/cosy.arox?pov=walkaround&brand=WBMI&vehicle=22MH&client=NVCO&paint=P0B71&fabric=FK9E1&sa=S02EU&angle=270&quality=90&sharp=99&resp=jpg&cut=3&bkgnd=%23EFEFEF&width=700",
      car_brand: carBrand4._id,
    },





    










    {
      model_name: "Volkswagen Tiguan",
      type_of_car: "Mid-Size Sporty SUV",
      car_image:
        "https://www.vwimg.com/vw-BW2-my2021/iris?COSY-EU-100-1713VV%25lXm0kYNazzSU9mu0fO7AS[…]PG1L99dA7bZZsedViiI3BaffQDi622UbZdnn41G1uugmiL00zKzA&width=864",
      car_brand: carBrand7._id,
    },
    {
      model_name: "Volkswagen Golf GTI",
      type_of_car: "Compact",
      car_image:
        "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_SEO_Compact_GolfGTI_Performance-1?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTgwMCZoZWk9NDgwJmFsaWduPTAuMDAsMC4wMCY5Njk5",
      car_brand: carBrand7._id,
    },
    {
      model_name: "Toyota 86GT",
      type_of_car: "Sporty Sedan",
      car_image:
        "https://www.toyota.com/imgix/responsive/images/gallery/photos-videos/2020/86/086_MY20_0029_V001.png?w=1536&q=90&fm=jpg&fit=max&cs=strip&bg=fff&auto=compress",
      car_brand: carBrand8._id,
    },
    {
      model_name: "Toyota GR Supra",
      type_of_car: "Sport Sedan",
      car_image:
        "https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_SEO_Compact_GolfGTI_Performance-1?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbhttps://www.toyota.com/imgix/responsive/images/gallery/photos-videos/2020/gr-supra/SUP_MY20_0028_V001.png?w=1536&q=90&fm=jpg&fit=max&cs=strip&bg=fff&auto=compressHQ9Nzkmd2lkPTgwMCZoZWk9NDgwJmFsaWduPTAuMDAsMC4wMCY5Njk5",
      car_brand: carBrand8._id,
    },
    {
      model_name: "Kia Stinger",
      type_of_car: "Sedan",
      car_image:
        "https://www.fiatusa.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk7GBfM9IW2VRkr72kVid9pYvwXGXQpMTV1rUEzg6OQCckPquBhS1U%25jzbTllxA0WmNlnIQFmwFDkpd2ATBoM&&pov=fronthero&width=1005&height=400&bkgnd=white&resp=jpg&cut=&x=1700&y=1900&w=6500&hhttps://www.kia.com/us/content/dam/kia/us/en/vehicles/stinger/2022/mtf/profile/mtftablet.png=6500",
      car_brand: carBrand9._id,
    },
    {
      model_name: "Kia Rio 5-Door",
      type_of_car: "Hatchbacks",
      car_image:
        "https://www.kia.com/us/content/dam/kia/us/en/vehicles/rio-5-door/2021/mtf/side/mtftablet.png",
      car_brand: carBrand9._id,
    },
    {
      model_name: "Hyundai Santa Fe",
      type_of_car: "5-passenger SUV",
      car_image:
        "https://s7d1.scene7.com/is/image/hyundai/2021-santa-fe-calligraphy-20-inch-quartz-white-019:Browse?fmt=png-alpha",
      car_brand: carBrand10._id,
    },
    {
      model_name: "Hyundai Sonata",
      type_of_car: "Midsize Sedan",
      car_image:
        "https://s7d1.scene7.com/is/image/hyundai/2021-sonata-ltd-stormy-sea-019:Browse?fmt=png-alpha",
      car_brand: carBrand10._id,
    },
    { title: 'Accord', type_of_car: 'Sedan', car_image: 'https://cars.usnews.com/static/images/Auto/izmo/i159163880/2020_honda_accord_angularfront.jpg', car_brand: carBrand11._id },
    { title: 'CR-V', type_of_car: 'SUV', car_image: 'https://cars.usnews.com/static/images/Auto/izmo/i159163880/2020_honda_accord_angularfront.jpg', car_brand: carBrand11._id },


    { title: 'Mazda CX-5', type_of_car: 'SUV', car_image: 'https://www.mazdausa.com/syssiteassets/vehicles/2021/cx-5/trims/sport/2021-mazda-cx-5-sport-package.jpg?w=320', car_brand: carbrand12._id },
    { title: 'Mazda3', type_of_car: 'Sedan', car_image: 'https://cars.usnews.com/static/images/Auto/izmo/i158929145/2020_mazda_mazda_3_angularfront.jpg', car_brand: carBrand12._id },
   
  ]

  
  await CarModel.insertMany(carModels);
  console.log("Created many cars");

}