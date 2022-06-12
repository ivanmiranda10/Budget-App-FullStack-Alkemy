const server = require("./app");
const { database } = require("./database");
const { PORT } = process.env;

database
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => console.log(`Server listening at Port ${PORT}`));
  })
  .catch((err) => console.log(err));
