import mongoose from "mongoose";
import app from "./app";
import config from "./config/config";

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
server();
