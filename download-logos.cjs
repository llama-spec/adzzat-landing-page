const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
    { name: 'iit-bombay.svg', url: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg' },
    { name: 'iit-delhi.svg', url: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg' },
    { name: 'iit-kanpur.svg', url: 'https://upload.wikimedia.org/wikipedia/en/a/a3/IIT_Kanpur_Logo.svg' },
    { name: 'iit-madras.svg', url: 'https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg' },
    { name: 'iisc.svg', url: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Indian_Institute_of_Science_logo.svg' },
    { name: 'bits-pilani.svg', url: 'https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg' }
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

logos.forEach(logo => {
    const filePath = path.join(dir, logo.name);

    // Parse URL to get options
    const url = new URL(logo.url);
    const options = {
        hostname: url.hostname,
        path: url.pathname,
        headers: {
            'User-Agent': 'AdzzatBot/1.0 (saksham@adzzat.com) Node.js/18'
        }
    };

    https.get(options, (response) => {
        if (response.statusCode === 200) {
            response.pipe(fs.createWriteStream(filePath));
            console.log(`Successfully downloading: ${logo.name}`);
        } else {
            console.log(`Failed ${logo.name}: Status code ${response.statusCode}`);
        }
    }).on('error', (err) => console.log(`Error downloading ${logo.name}: ${err.message}`));
});
