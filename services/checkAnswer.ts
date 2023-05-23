interface CheckAnswerParams {
  problemStatement: string;
  answer: string;
}

export default async function checkAnswer(options: CheckAnswerParams) {
  const url = "https://api.openai.com/v1/chat/completions";
  const body = {
    max_tokens: 500,
    temperature: 0.5,
    top_p: 0.5,
    n: 1,
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `
        Is this code correct for the following problem?
        ${options.problemStatement}

        ${options.answer}
        
        Answer in the following format
        
        {isCorrect: boolean, explanation: string}

        Always write an explanation to the returned JSON never leave it empty

        Format it as JSON not plain text, only return the data, no explanation or any other text
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
