// src/components/MessageAssistant.jsx
import { useState } from 'react';

function MessageAssistant({ onSuggestion }) {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const handleSuggest = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: 'Suggest a short and fun secret message to hide in an image.',
            },
          ],
          max_tokens: 50,
        }),
      });

      const data = await response.json();
      const message = data.choices[0]?.message?.content?.trim();
      setSuggestion(message);
      onSuggestion(message);
    } catch (error) {
      console.error(error);
      setSuggestion('Failed to get suggestion.');
    }
    setLoading(false);
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleSuggest}
        disabled={loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        {loading ? 'Thinking...' : 'Suggest Message'}
      </button>

      {suggestion && (
        <p className="mt-2 text-gray-700 italic">💡 {suggestion}</p>
      )}
    </div>
  );
}

export default MessageAssistant;
