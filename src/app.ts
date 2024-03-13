// Import necessary modules
import express, { Request, Response } from "express";
import axios from "axios";
import ip from "ip";

// Create an Express application
const app = express();
const port = 3000;

// Define a route to make a GET request to 'https://ipdomainipwhitelisting.onrender.com/'
app.get("/", async (req: Request, res: Response) => {
  try {
    // Make a GET request using axios
    const response = await axios.get(
      "https://ipdomainipwhitelisting.onrender.com/",
      {
        withCredentials: true,
        headers: {
          realip: ip.address(),
        },
      }
    );

    // Send the result back to the client
    res.status(response.status).send(response.data);
  } catch (error) {
    // Handle errors
    res.status(500).send("Error fetching data");
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
