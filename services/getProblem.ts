interface GetProblemParams {
  language: string;
  level: "beginner" | "advanced" | "expert" | "impossible";
}

export default async function getProblem(options: GetProblemParams) {
  const url = "https://api.openai.com/v1/chat/completions";
  const body = {
    max_tokens: 4000,
    temperature: 0.7,
    top_p: 0.8,
    n: 1,
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `
        Please generate a unique ${options.language} ${options.level} level coding problem. Ensure that the problem is distinct from any previously generated problems.
        
        in the following JSON format
        
        {
        problemStatement: "text goes here", 
        hint: "code snippet in ${options.language} goes here"
        }
        
        Format it as JSON not plain text
        `,
      },
    ],
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();

  return data;
}
