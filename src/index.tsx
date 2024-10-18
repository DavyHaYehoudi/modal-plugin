import React from "react";
import "./styles.css";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "Default Title",
  children,
  className = "",
  style = {},
  showCancelButton = false,
  showConfirmButton = false,
  showOkButton = true, // Par défaut on affiche le bouton "OK"
  cancelButtonText = "Cancel",
  confirmButtonText = "Confirm",
  okButtonText = "OK",
  cancelButtonClassName = "",
  confirmButtonClassName = "",
  okButtonClassName = "",
  onCancel,
  onConfirm,
  onOk,
}) => {
  if (!isOpen) return null; // Si isOpen est false, la modale n'est pas affichée

  // Fonction pour gérer le clic sur le backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Vérifiez si l'élément cliqué est le backdrop (c'est-à-dire la div principale)
    if (e.currentTarget === e.target) {
      onClose(); // Ferme la modale
    }
  };

  return (
    <div id="modal" className={`modal-backdrop ${className}`} style={style} onClick={handleBackdropClick}>
      <div className="modal-content">
        {title && <h2>{title}</h2> }
        <hr className="modal-divider" />
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          {showCancelButton && (
            <button onClick={onCancel} className={`cancel-button ${cancelButtonClassName}`}>
              {cancelButtonText}
            </button>
          )}
          {showConfirmButton && (
            <button onClick={onConfirm} className={`confirm-button ${confirmButtonClassName}`}>
              {confirmButtonText}
            </button>
          )}
          {showOkButton && (
            <button onClick={onOk || onClose} className={`ok-button ${okButtonClassName}`}>
              {okButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
