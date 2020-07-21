import React from 'react';
//import { Modal } from './Modal';

export const Filter = () => {
  return (
    <div className="filter-container">
      <input
        className="waves-effect waves-light btn"
        type="button"
        value="Novo Lançamento"
      />
      {/* <Modal className={dropdown} modalRef={modalRef} /> */}
      <input type="text" placeholder="Filtro" />
    </div>
  );
};
