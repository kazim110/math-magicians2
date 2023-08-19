import React, { useState, useEffect } from 'react';
import QuoteRender from './QuoteRender';
import '../styles/Quote.module.css';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'happiness';
    const apiKey = 'DYAplweCyKUAhJo6KBe7AA==MpeDGJAtGH0BQdPx';
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': `${apiKey}` },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Failed to fetch quotes');
        }
        return resp.json();
      })
      .then((json) => {
        setQuotes(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [error]);

  let content;
  if (loading) {
    <p>Loading...</p>;
  } else if (error) {
    const errMessage = `Couldn't Fetch the quotes ${error}`;
    return errMessage;
  } else {
    content = <QuoteRender key={quotes.id} quotes={quotes} />;
  }

  return (
    <div className="quotes">{content}</div>
  );
}

export default Quotes;
