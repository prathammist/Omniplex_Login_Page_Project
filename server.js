const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading JSON file.');
        }

        const quoteData = JSON.parse(data);
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Omniplex Login</title>
                <link rel="stylesheet" href="styles.css">
                <link rel="icon" href="favicon.ico">
            </head>
            <body>
                <div class="login-container">
                    <div class="login-box">
                        <h1>Welcome Back</h1>
                        <p>Sign in to continue to Omniplex</p>
                        <form id="login-form">
                            <input type="email" id="email" placeholder="Email" required>
                            <input type="password" id="password" placeholder="Password" required>
                            <button type="submit">Sign In</button>
                        </form>
                        <p class="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
                    </div>
                    <div class="quote-container">
                        <p id="quote">${quoteData.quote} — ${quoteData.author}</p>
                    </div>
                </div>
            </body>
            </html>
        `);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
