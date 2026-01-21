// Use publicly accessible models WITHOUT tokens
async function polishParagraph() {
    const text = document.getElementById('inputText').value;
    
    // Option A: Use a model that doesn't require auth
    const response = await fetch(
        "https://api-inference.huggingface.co/models/gpt2",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                inputs: `Rewrite this better: ${text}`,
                parameters: { max_length: 200 }
            })
        }
    );
    
    // Option B: Use a different free AI service
    const deepseekResponse = await fetch(
        "https://api.deepseek.com/chat/completions",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {role: "system", content: "You are a helpful writing assistant."},
                    {role: "user", content: `Improve this text: ${text}`}
                ],
                max_tokens: 500
            })
        }
    );
}
