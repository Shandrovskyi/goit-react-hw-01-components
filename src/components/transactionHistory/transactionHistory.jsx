import React from 'react';
import css from './transactionHistory.module.css';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.headTable}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.bodyTable}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.bodyList}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
