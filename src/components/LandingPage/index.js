import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main className="container__entry">
      <div className="landing__page">
        <div className="section-wrapper">
          <section className="main-section">
            <h1 data-testid="logo" className="logo--big">
              Banka
            </h1>
            <h2 className="first-text">Banking made easier</h2>
            <p className="second-text">
              Banka helps you track all transaction on your account(s)
            </p>
            <Link to="/sign-up" className="cta">
              SIGN-UP{' '}
            </Link>
          </section>
          <section className="infograph-section">
            <img
              className="monitor"
              src="https://res.cloudinary.com/swisskid95/image/upload/v1566575800/Banka-assets/infograph_jpuvrv.svg"
              alt="infograph"
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
