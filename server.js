import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

const SERP_API_KEY =
    "ee08ff16c7d98b81a64b7354ef36f7bf682e2c70843d8a936650a4d3fe11c77f";

app.get("/api/scholar", async (req, res) => {
    try {
        const query = req.query.q;
        console.log(query);
        const response = await axios.get("https://serpapi.com/search", {
            params: {
                engine: "google_scholar",
                q: query,
                api_key: SERP_API_KEY, // Replace with your API key
                num: 5,
            },
        });

        res.json(response.data); // Send the response back to the client
    } catch (error) {
        res.status(500).send("Error fetching data from SerpAPI");
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
