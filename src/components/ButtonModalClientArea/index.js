import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ReactCircleModal } from "react-circle-modal";
import { FiUser, FiX, FiLock } from "react-icons/fi";
import { InputIcon } from "../InputIcon";
import { useForm, Controller } from "react-hook-form";

import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.scss";

const ButtonModalClientArea = ({ handleCloseMenu }) => {
  const router = useRouter();

  const [toggleModalFunc, setToggleModalFunc] = useState(null);

  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Função que cuida de abrir o modal e fechar o menu
  const handleOpenModal = (onclick) => {
    handleCloseMenu();
    return onclick;
  };

  const onSubmit = (formData, onClick) => {
    // alert(JSON.stringify(formData));

    // Caso login correto, acessa a página do cliente
    if (formData.codigo == "teste" && formData.senha == "123") {
      // Seta o estado para fechar o ReactCircleModal
      setToggleModalFunc(onClick);

      // Enviar o usuário para a página do cliente
      router.push("/areacliente");

      // Limpa todos os toasts
      toast.dismiss();

      // Emite o toast
      toast.success("Login efetuado com sucesso!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "colored",
      });
    } else {
      // Emite o toast
      toast.error("Código ou Senha inválido(s)!", {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "colored",
      });
    }
  };

  return (
    <ReactCircleModal
      backgroundColor="#3e7cc5f2"
      toogleComponent={(onClick) => (
        <button
          type="button"
          className={styles.openButtom}
          onClick={(e) => handleOpenModal(onClick(e))}
          disabled={router.pathname === "/areacliente" ? true : false}
        >
          <FiUser className={styles.iconButton} />
          Área do Cliente
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <button
              onClick={onClick || toggleModalFunc}
              className={styles.closeButton}
              type="button"
            >
              <FiX />
            </button>
            <h6>Área do Cliente</h6>
            <form onSubmit={handleSubmit((m) => onSubmit(m, onClick))}>
              <div className={styles.inputBox}>
                <Controller
                  name="codigo"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <InputIcon
                      type="text"
                      placeholder="Código do cliente:"
                      iconComponent={<FiUser />}
                      error={errors.codigo}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="senha"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <InputIcon
                      type="password"
                      placeholder="Senha:"
                      iconComponent={<FiLock />}
                      error={errors.senha}
                      {...field}
                    />
                  )}
                />
                <button type="submit" className={styles.submitButtom}>
                  Efetuar Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </ReactCircleModal>
  );
};

export default ButtonModalClientArea;
