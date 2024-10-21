export interface ModalProps {
  isOpen: boolean; // Pour contrôler l'affichage de la modale
  onClose: () => void; // Pour fermer la modale
  title: React.ReactNode; // Titre de la modale
  children?: React.ReactNode; // Contenu de la modale
  className?: string; // Permettre la surcharge de classes CSS
  style?: React.CSSProperties; // Permettre la surcharge des styles inline
  showCancelButton?: boolean; // Contrôle l'affichage du bouton "Annuler"
  showOkButton?: boolean; // Contrôle l'affichage du bouton "OK"
  cancelButtonText?: string; // Texte du bouton "Annuler"
  okButtonText?: string; // Texte du bouton "OK"
  cancelButtonClassName?: string;
  okButtonClassName?: string;
  onCancel?: () => void; // Action quand on clique sur "Annuler"
  onOk?: () => void; // Action quand on clique sur "OK"
}
