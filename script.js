// In your script.js
async function polishParagraph() {
    const text = document.getElementById('inputText').value;
    
    const response = await fetch('https://your-repl-url.repl.co/polish', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ text: text })
    });
    
    const data = await response.json();
    
    if (data.success) {
        document.getElementById('resultText').textContent = data.result;
    } else {
        document.getElementById('resultText').textContent = "Error: " + data.error;
    }
}
