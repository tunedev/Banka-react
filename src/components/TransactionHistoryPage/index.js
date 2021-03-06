import React from 'react';
import SideNavPanel from '../commons/SideNavPanel';
import TopSection from '../commons/TopSection';
import PageTitle from '../commons/PageTitle';

export const TransactionHistoryPage = () => {
  return (
    <main className="container">
      <SideNavPanel />
      <div className="main-wrapper">
        <TopSection />
        <PageTitle name="transaction history" />
        <div className="summary-field summary-field--mini">
          <img
            className="summary__nav summary__nav--mini"
            src="https://res.cloudinary.com/swisskid95/image/upload/v1566575801/Banka-assets/left-arrow_j7rkn3.svg"
            alt="left arrow navigator"
          />
          <div className="summary summary--mini">
            <div className="account-type">
              <p className="summary__text--mini">current account</p>
            </div>
            <div className="account-number">
              <p className="summary__text--mini">0005894789</p>
            </div>
            <div className="summary__bal--mini">
              &#8358;
              <span>45,000.00</span>
            </div>
          </div>
          <img
            className="summary__nav summary__nav--mini"
            src="https://res.cloudinary.com/swisskid95/image/upload/v1566575801/Banka-assets/right-arrow_w5gibu.svg"
            alt="right arrow navigator"
          />
        </div>
        <div className="transaction modal__open">
          <div className="transaction__col1">
            <p className="transaction__amount">45,000.00</p>
            <p className="transaction__date">Mon, 12-Mar-2019</p>
          </div>
          <div className="transaction__col2">
            <p className="transaction__details">
              Withdrawal at Banka branch Alakija branch Ibadan-Express way off
              Hunt-hill close surulere Lagos.
            </p>
          </div>
        </div>
        <div className="transaction modal__open">
          <div className="transaction__col1">
            <p className="transaction__amount">45,000.00</p>
            <p className="transaction__date">Mon, 12-Mar-2019</p>
          </div>
          <div className="transaction__col2">
            <p className="transaction__details">
              Withdrawal at Banka branch Alakija branch Ibadan-Express way off
              Hunt-hill close surulere Lagos.
            </p>
          </div>
        </div>
        <div className="transaction modal__open">
          <div className="transaction__col1">
            <p className="transaction__amount">45,000.00</p>
            <p className="transaction__date">Mon, 12-Mar-2019</p>
          </div>
          <div className="transaction__col2">
            <p className="transaction__details">
              Withdrawal at Banka branch Alakija branch Ibadan-Express way off
              Hunt-hill close surulere Lagos.
            </p>
          </div>
        </div>
        <div className="transaction modal__open">
          <div className="transaction__col1">
            <p className="transaction__amount">45,000.00</p>
            <p className="transaction__date">Mon, 12-Mar-2019</p>
          </div>
          <div className="transaction__col2">
            <p className="transaction__details">
              Withdrawal at Banka branch Alakija branch Ibadan-Express way off
              Hunt-hill close surulere Lagos.
            </p>
          </div>
        </div>
      </div>

      <div className="modal">
        <div className="transaction-full no-sidebar-page">
          <div className="transaction__details__title">
            <h1 className="content-title__text modal__title">
              transaction details
            </h1>
            <span className="modal__close transaction--close">&times;</span>
          </div>
          <div className="transaction-full__main">
            <div className="transaction-full__type transaction-full__section">
              <h4 className="transaction-full__title">transaction type</h4>
              <p className="transaction-full__body">Debit</p>
            </div>
            <div className="transaction-full__type transaction-full__section">
              <h4 className="transaction-full__title">transaction date</h4>
              <p className="transaction-full__body">Mon, 12-Mar-2019</p>
            </div>
            <div className="transaction-amount transaction-full__section">
              <h4 className="transaction-full__title">amount</h4>
              <p className="transaction-full__body">45,000.00</p>
            </div>
            <div className="transaction__remark transaction-full__section">
              <h4 className="transaction-full__title">old balance</h4>
              <p className="transaction-full__body">195,789</p>
            </div>
            <div className="transaction__remark transaction-full__section">
              <h4 className="transaction-full__title">new Balance</h4>
              <p className="transaction-full__body">150,700</p>
            </div>
            <div className="transaction__remark transaction-full__section">
              <h4 className="transaction-full__title">remark</h4>
              <p className="transaction-full__body">
                Withdrawal at Banka branch Alakija branch Ibadan-Express way off
                Hunt-hill close surulere Lagos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionHistoryPage;
