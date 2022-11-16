var express = require('express');
var router = express.Router();
var geoip = require('geoip-lite');

const axios = require("axios");



/* GET home page. */
router.get('/', function (req, res, next) {

//  const ippp =  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
//     console.log('addr: ' + add);

  //   var geo = geoip.lookup("223.177.100.15");

  //   let config = {
  //     headers: {
  //       'X-RapidAPI-Key': 'cb6fe9ff5emsh19ecd41b690e52ep1c022ajsn16595e55f96f',
  //       'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
  //     },
  //     params: {
  //       ip: "223.177.100.15"
  //     },
  //   }


  const apiip = require('apiip.net')('905a1afe-c57a-4831-9dde-a79c9fd8ad69');

apiip
  .getLocation()
  .then((results) => {
    console.log(results)
  
    res.send(results)
  })
  .catch((error) => console.error(error));
 const Apiip = require ('apiip.net');


    // axios.request('https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/', config).then(function (response) {

    //   console.log(response);
    //   console.log("GEOOOOOOOOO",geo)
    //   res.render("index", {data: response, geo})
    // }).catch(function (error) {
    //   console.error("PPPPERRORRRRRR" ,error);
    // });

  // })


  //YOU CAN EVEN USE THE COMMENTED OUT CODE. IT ALSO GIVES IP ADDRESS, JUST IN DIFFERENT CODE.

  //...............

  //  var add =  req.headers['x-forwarded-for'] || req.socket.remoteAddress || null
  //  console.log(add)
  //   res.render('index', { title: 'Express', add });

  //..................


});

module.exports = router;
