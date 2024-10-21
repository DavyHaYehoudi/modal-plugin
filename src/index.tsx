import React from "react";
import "./styles.css";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  style = {},
  showCancelButton = false,
  showOkButton = true, // Par défaut on affiche le bouton "OK"
  cancelButtonText = "Cancel",
  okButtonText = "OK",
  cancelButtonClassName = "",
  okButtonClassName = "",
  onCancel,
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
    <div
      id="modal"
      className={`modal-backdrop ${className}`}
      style={style}
      onClick={handleBackdropClick}
    >
      <div className="modal-content">
          {/* Affichage du titre */}
          {typeof title === 'string' ? <h2>{title}</h2> : title}
        <hr className="modal-divider" />
        {/* Contenu de la modale, s'il existe */}
        {children && <div className="modal-body">{children}</div>}
        <div className="modal-footer">
          {showCancelButton && (
            <button
              onClick={onCancel}
              className={`cancel-button ${cancelButtonClassName}`}
            >
              {cancelButtonText}
            </button>
          )}
          {showOkButton && (
            <button
              onClick={onOk || onClose}
              className={`ok-button ${okButtonClassName}`}
            >
              {okButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
