export interface ModalProps {
  isOpen: boolean; // Pour contrôler l'affichage de la modale
  onClose: () => void; // Pour fermer la modale
  title?: string; // Titre de la modale
  children?: React.ReactNode; // Contenu de la modale
  className?: string; // Permettre la surcharge de classes CSS
  style?: React.CSSProperties; // Permettre la surcharge des styles inline
  showCancelButton?: boolean; // Contrôle l'affichage du bouton "Annuler"
  showConfirmButton?: boolean; // Contrôle l'affichage du bouton "Confirmer"
  showOkButton?: boolean; // Contrôle l'affichage du bouton "OK"
  cancelButtonText?: string; // Texte du bouton "Annuler"
  confirmButtonText?: string; // Texte du bouton "Confirmer"
  okButtonText?: string; // Texte du bouton "OK"
  onCancel?: () => void; // Action quand on clique sur "Annuler"
  onConfirm?: () => void; // Action quand on clique sur "Confirmer"
  onOk?: () => void; // Action quand on clique sur "OK"
}
