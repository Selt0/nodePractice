const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    console.log(params);
    if ("pizza" in params) {
      if (params["pizza"] == "meatzerella") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          ingredients: [
            "pepperoni",
            "ham",
            "italian sausage",
            "5-layer cheese",
          ],
          img: "https://www.bacinos.com/wp-content/uploads/2021/05/27-Meat-Lovers-Pizza-Recipes.jpg",
        };

        res.end(JSON.stringify(objToJson));

      } else if (params["pizza"] == "spicy") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          ingredients: [
            "jalepenos",
            "banana peppers",
            "Roasted red peppers",
            "pinapple",
            "pepperoni",
          ],
          img: "https://skinnyms.com/wp-content/uploads/2012/08/Zucchini-Bell-Pepper-Pizza-1.jpg",
        };
        res.end(JSON.stringify(objToJson));
      } else if (params["pizza"] == "mushroom") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          ingredients: [
            "mushroom",
            "red onion",
            "Calabrian chiles",
            "goat cheese",
          ],
          img: "https://www.pamperedchef.com/iceberg/com/recipe/1684007-lg.jpg",
        };
        res.end(JSON.stringify(objToJson));
      }
    } //student if
  } //else if
  else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});



server.listen(8000);
