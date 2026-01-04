import { createAgent, gemini } from "inngest/agent-kit";

const analyzeTicket = async (ticket) => {
  const supportAgent = createAgent({
    model: gemini({
      model: "gemini-1.5-flash-8b",
      apiKey: process.env.GEMINI_API_KEY,
    }),
    name: "AI Ticket Triage Assistant",
    system: `
You are an expert AI assistant that processes technical support tickets.

Your job is to:
1. Summarize the issue in 1–2 short sentences.
2. Estimate the priority ("low", "medium", or "high").
3. Provide helpful technical notes that a human moderator can use to solve the issue.
   Include external links or resources if relevant.
4. List the relevant technical skills required to resolve the issue.

IMPORTANT RULES:
- Respond with ONLY valid raw JSON.
- Do NOT include markdown, code fences, comments, or extra text.
- The response must be a single JSON object.
- Do NOT explain anything outside the JSON.
`,
  });

  const response = await supportAgent.run(`
Analyze the following support ticket and return a JSON object in the exact format shown below.

Respond ONLY in this JSON format and nothing else:

{
  "summary": "A short 1–2 sentence summary of the issue",
  "priority": "low | medium | high",
  "helpfulNotes": "A detailed technical explanation that helps a moderator resolve the issue. Include links if useful.",
  "relatedSkills": ["React", "Node.js"]
}

Ticket information:
- Title: ${ticket.title}
- Description: ${ticket.description}
`);

const raw= response.output[0].context
try{
    const match=raw.match(/```json\s*([\s\S]*?)\s*```/i);
    const jsonString=match?match[1]:raw.trim()
    return JSON.parse(jsonString)
}catch(e)
{
    console.log("falied to parse JSON from AI response"+e.message)
    return null;
}
  return response;
};

export default analyzeTicket;
