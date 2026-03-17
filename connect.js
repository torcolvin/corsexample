// Config - Replace with your actual credentials/URL
const CONFIG = {
  username: "admin",
  password: "password123",
  endpoint: "https://jsonplaceholder.typicode.com/posts/1",
};

const btn = document.getElementById("fetchBtn");
const display = document.getElementById("result");

/**
 * Executes the authenticated fetch call
 */
async function fetchData() {
  display.innerText = "Authenticating...";

  // Encode credentials for Basic Auth
  const authHeader = "Basic " + btoa(`${CONFIG.username}:${CONFIG.password}`);

  try {
    const response = await fetch(CONFIG.endpoint, {
      method: "GET",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();

    // Update the UI with the result
    display.innerHTML = `<strong>Success!</strong><br>Title: ${data.title}`;
    console.log("Response Data:", data);
  } catch (error) {
    display.style.color = "red";
    display.innerText = `Error: ${error.message}`;
    console.error("Fetch failed:", error);
  }
}

// Attach the event listener
btn.addEventListener("click", fetchData);
