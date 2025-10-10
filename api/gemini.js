export default async function handler(req, res) {
  try {
    const { history } = await req.json();

   
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json",
        },
        body: JSON.stringify({ contents: formattedHistory }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
