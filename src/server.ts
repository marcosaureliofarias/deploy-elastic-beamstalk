import express from "express";
// import connectMongoDB from "./database/mongodb";
// import Form from "./models/Form"


const app = express();

app.use(express.json());

// try {
//     const databaseUriUrl = ""; // string de conexão aqui
//     connectMongoDB(databaseUriUrl);
//   } catch (e: any) {
//     console.error(e.message);
//     process.exit(0);
//   }

const PORT = 3000;

app.get("/", async (req, res) => {
    res.send("Hello word");
  });
  
app.listen(process.env.PORT || PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})