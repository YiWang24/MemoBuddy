// This file contains the client-side JavaScript code for the frontend.
async function startAuth() {
  try {
    const response = await fetch("/api/auth/start");
    const data = await response.json();
    if (data.authUrl) {
      window.location.href = data.authUrl;
    }
  } catch (error) {
    document.getElementById("result").textContent = "Error: " + error.message;
  }
}

// Check if the URL contains a token
async function checkToken() {
  try {
    const response = await fetch("/api/auth/token-info");
    const data = await response.json();
    document.getElementById(
      "result"
    ).textContent = `Token Info:\nCreated At: ${new Date(
      data.createdAt
    ).toLocaleString()}`;
  } catch (error) {
    document.getElementById("result").textContent = "Error: " + error.message;
  }
}

// Check if URL contains token information
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get("message");
const tokenId = urlParams.get("tokenId");
const createdAt = urlParams.get("createdAt");

// Display token information
if (message && tokenId && createdAt) {
  document.getElementById("result").innerHTML = `
      message: ${message}<br>
      tokenId: ${tokenId}<br>
      createdAt: ${createdAt}
    `;
}
