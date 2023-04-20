import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.css';

Modal.setAppElement('#root');

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalComponent = ({ children, ...props }) => (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      {...props}
    >
      {children}
      <button className={styles.btnModal} onClick={closeModal}>
        Cerrar
      </button>
    </Modal>
  );

  return [ModalComponent, openModal, closeModal];
};

export default useModal;