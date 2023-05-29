import React from 'react';
import styles from "./Modal.module.css"

interface Props {
    children: React.ReactNode;
}

const Modal = ({children}:Props) => {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal");
        modal!.classList.add("hide");
    };

    const closeButton = (
        <button className={styles.closeButton} onClick={closeModal}>
            X
        </button>
    );

    return (
        <div id="modal" className="hide">
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>Editar Tarefa</h2>
                {closeButton}
                {children}
            </div>
        </div>
    );
}

export default Modal;
