import React from 'react';

export const Summary = (props) => {
  const { numLanc, Income, Expense, Balance } = props;
  return (
    <div className="summary-container">
      <label htmlFor="">Lançamentos:</label>
      <span>{numLanc}</span>
      <label htmlFor="">Receitas:</label>
      <span>{Income}</span>
      <label htmlFor="">Despesas:</label>
      <span>{Expense}</span>
      <label htmlFor="">Saldo:</label>
      <span>{Balance}</span>
    </div>
  );
};
