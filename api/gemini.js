export default async function handler(req, res) {
  try {
    console.log("🔹 [START] Gemini API handler triggered");

    // Log incoming request info (safe data only)
    console.log("🔹 Request method:", req.method);

    // ✅ Option 1: Use req.body instead of req.json()
    const { history } = req.body;

    // Validate incoming data
    if (!history || !Array.isArray(history)) {
      console.error("❌ Invalid or missing 'history' in request body");
      return res
        .status(400)
        .json({ error: "Invalid request body: missing history" });
    }

    console.log(`🔹 Received ${history.length} chat messages`);

    // Format data for Gemini API
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    // Debug sample payload (truncate long text for safety)
    console.log(
      "🧩 Formatted payload sample:",
      JSON.stringify(formattedHistory[0], null, 2)
    );

    // Gemini API URL (hide key in logs)
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    console.log("🌐 Sending request to:", url.replace(/key=.*$/, "key=HIDDEN"));

    // Send request to Gemini
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Gemini API responded with error:", data.error || data);
      return res.status(response.status).json({
        error: data.error?.message || "Gemini API error",
      });
    }

    console.log("✅ Gemini API response received successfully");
    return res.status(200).json(data);
  } catch (error) {
    console.error("🔥 [SERVER ERROR] Gemini API handler failed:", error);
    return res.status(500).json({
      error: error.message || "Internal Server Error",
    });
  }
}
