import React from 'react';
import PropTypes from 'prop-types';

function QuoteRender({ quotes }) {
  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <p>
            {quote.category}
            {' '}
            quote
          </p>
          <h4>{quote.quote}</h4>
          <p>{quote.author}</p>

        </div>
      ))}
    </div>
  );
}

QuoteRender.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default QuoteRender;
