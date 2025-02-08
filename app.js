const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        email: "opedamola003@gmail.com",  // Replace with your registered HNG12 email
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/yourusername/your-repo" // Replace with your GitHub repo URL
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
