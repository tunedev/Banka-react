import React from 'react';
import SideNavPanel from '../commons/SideNavPanel';

const CreateAccountPage = () => {
  return (
    <main className="container">
      <SideNavPanel />
      <div className="main-wrapper">
        <div className="top-section">
          <img
            src="../../src/assets/images/menu.svg"
            alt="Sidebar open button"
            className="sidebar__open"
          />
          <h1 className="logo">Banka</h1>
        </div>
        <div className="content-title">
          <h1 className="content-title__text">create account</h1>
        </div>
        <form className="entry--closer entry">
          <select
            name="account type"
            className="entry__input--account-type entry__input entry__input--bigger"
          >
            <option disabled selected>
              Account Type
            </option>
            <option value="current">current</option>
            <option value="savings">savings</option>
          </select>
          <input
            type="text"
            className="entry__input entry__input--bigger"
            name="account-purpose"
            placeholder="account purpose"
          />
          <button className="btn entry__btn entry__input--bigger">
            create account
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateAccountPage;