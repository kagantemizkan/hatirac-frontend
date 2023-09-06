import React, { useState } from 'react';

function MessageCell({ message }) {
  const maxLength = 60; // Gösterilecek maksimum karakter sayısı
  // eslint-disable-next-line no-unused-vars
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);

  // Mesajın tamamını veya kısaltılmış halini döndürme işlevi
  function renderMessage() {
    if (message.length <= maxLength) {
      return message;
    } else if (showFullMessage) {
      return (
        <div>
          {message}
          <button className='btn btn-warning' onClick={() => setShowFullMessage(false)}>Kapat</button>
        </div>
      );
    } else {
      const truncatedMessage = message.substring(0, maxLength) + '...';
      return (
        <div>
          {truncatedMessage}
          <button className='btn btn-dark' onClick={() => setShowFullMessage(true)}>Tümünü Gör</button>
        </div>
      );
    }
  }

  return (
    <td>
      <div className={isOverflowed ? 'overflowed' : ''}>
        {renderMessage()}
      </div>
    </td>
  );
}

export default MessageCell;
