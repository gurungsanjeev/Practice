import React, { useState, useEffect } from 'react';

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      setQuote('Error fetching quote');
    }
    setLoading(false);
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>"{quote}"</p>}
      <button onClick={fetchNewQuote}>Get New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
