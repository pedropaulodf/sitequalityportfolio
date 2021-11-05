import React from 'react';
import {ReactCircleModal} from 'react-circle-modal';
import { FiUser, FiX, FiLock } from "react-icons/fi";
import { InputIcon } from '../InputIcon';
import styles from "./styles.module.scss";

const ButtonModalClientArea = () => {
  
  return (
    <ReactCircleModal
      backgroundColor="#3e7cc5f2"
      toogleComponent={onClick => (
        <button type="button" onClick={onClick}>
          <FiUser className={styles.iconButton} />
          Área do Cliente
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div className={styles.modal} >
          <button onClick={onClick} className={styles.closeButton}><FiX /></button>
          <h6>Área do Cliente</h6>
          <div className={styles.inputBox}>
            <InputIcon type="text" placeholder="Código do cliente:" iconComponent={<FiUser />} required />
            <InputIcon type="text" placeholder="Senha:" iconComponent={<FiLock />} required />
            <button type="submit" className={styles.submitButtom}>Efetuar Login</button>
          </div>
        </div>
      )}
    </ReactCircleModal>
  )
}

export default ButtonModalClientArea;