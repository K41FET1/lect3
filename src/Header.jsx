import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Card Application</h1>
      <nav>
        <button onClick={() => window.open('https://lichess.com', '_blank')}>
          Go to Lichess
        </button>
      </nav>
    </header>
  );
}

export default Header;
