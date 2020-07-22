import React from 'react';
import Modal from 'react-modal';
//import { Modal } from './Modal';

Modal.setAppElement('#root');

export const Filter = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="filter-container">
      <button onClick={() => toggleModal()}>Novo</button>;
      <Modal isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay">
        <div className="center modal-content">
          <h4>Transação</h4>

          <form action="#">
            <p>
              <label>
                <input
                  class="with-gap"
                  name="group1"
                  type="radio"
                  checked
                  value="+"
                />
                <span>Receita</span>
              </label>

              <label>
                <input class="with-gap" name="group1" type="radio" value="-" />
                <span>Despesa</span>
              </label>
            </p>
            <p>
              <span>Categoria:</span>
              <select></select>
            </p>
          </form>
        </div>
        <div className="modal-footer">
          <a
            className="modal-close waves-effect waves-red btn-flat"
            onClick={() => toggleModal()}
          >
            Fechar
          </a>
          <a
            className="modal-close waves-effect waves-green btn-flat"
            onClick={() => toggleModal()}
          >
            Salvar
          </a>
        </div>
      </Modal>
      <input type="text" placeholder="Filtro" />
    </div>
  );
};
