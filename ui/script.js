document.getElementById('connect-wallet').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const walletAddress = accounts[0];
            // Truncate the wallet address for better display
            const truncatedAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;
            document.getElementById('connect-wallet').textContent = truncatedAddress;
        } catch (error) {
            console.error('User  denied account access or error occurred:', error);
        }
    } else {
        console.error('MetaMask is not installed. Please install it to use this feature.');
    }
});

document.getElementById('send-message').addEventListener('click', async () => {
    const inputField = document.querySelector('.message-input');
    const userMessage = inputField.value;

    if (userMessage) {
        const chatHistory = document.querySelector('.chat-history');
        chatHistory.innerHTML += `<div>User: ${userMessage}</div>`;
        inputField.value = '';

        const response = await getHuggingFaceResponse(userMessage);
        chatHistory.innerHTML += `<div>Bot: ${response}</div>`;
    }
});

async function getHuggingFaceResponse(message) {
    const apiKey = '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'; // Replace with your actual API key
    const apiUrl = 'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: message })
    });

    if (!response.ok) {
        console.error('Error fetching response from Hugging Face API:', response.statusText);
        return 'Sorry, I could not get a response.';
    }

    const data = await response.json();
    return data[0]?.generated_text || 'Sorry, I could not understand that.';
}

async function getHuggingFaceResponse(message) {
    const apiKey = process.env.HUGGING_FACE_API_KEY; // Use the API key from the environment variable
    const apiUrl = 'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B'; // You can change the model as needed

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: message })
    });

    if (!response.ok) {
        console.error('Error fetching response from Hugging Face API:', response.statusText);
        return 'Sorry, I could not get a response.';
    }

    const data = await response.json();
    return data[0]?.generated_text || 'Sorry, I could not understand that.';
}