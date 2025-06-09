export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log('Webhook received:', data);

    // Your custom processing logic here
    const processedValue = `Hello, ${data.name || "User"}`;

    res.status(200).json({
      success: true,
      result: {
        processed_output: processedValue
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
