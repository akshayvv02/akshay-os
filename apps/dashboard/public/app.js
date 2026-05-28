const statusText = document.querySelector("#statusText");
const statusDot = document.querySelector("#statusDot");
const healthOutput = document.querySelector("#healthOutput");
const refreshButton = document.querySelector("#refreshButton");

async function loadHealth() {
  statusText.textContent = "Checking...";
  statusDot.className = "dot pending";

  try {
    const response = await fetch("/api/health", {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`);
    }

    const data = await response.json();
    statusText.textContent = data.status === "ok" ? "Online" : "Unexpected response";
    statusDot.className = data.status === "ok" ? "dot ok" : "dot error";
    healthOutput.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    statusText.textContent = "Offline";
    statusDot.className = "dot error";
    healthOutput.textContent = JSON.stringify(
      {
        error: error instanceof Error ? error.message : "Unknown error"
      },
      null,
      2
    );
  }
}

refreshButton.addEventListener("click", loadHealth);
loadHealth();
setInterval(loadHealth, 5000);
