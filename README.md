# React Modal Plugin

Un composant modal réutilisable pour les applications React, écrit en TypeScript. Ce plugin offre une interface simple pour afficher des modales personnalisées avec des boutons d'action.

## Installation

Pour installer le plugin, utilisez npm :

```bash
npm install react-modal-plugin
```  
ou bien  
```bash
yarn add react-modal-plugin
```
## Utilisation

Importez le composant Modal dans votre fichier React :
```jsx
import Modal from 'react-modal-plugin';
```

Voici un exemple d'utilisation du composant modal :
```jsx
import React, { useState } from 'react';
import Modal from 'react-modal-plugin';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la Modale</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Titre de la Modale"
        showCancelButton={true}
        showConfirmButton={true}
        cancelButtonText="Annuler"
        confirmButtonText="Confirmer"
        onCancel={closeModal}
        onConfirm={() => {
          alert('Action confirmée!');
          closeModal();
        }}
      >
        <p>Contenu de la modale</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Propriétés du Composant
| Propriété             | Type                        | Description                                                 |
|-----------------------|-----------------------------|-------------------------------------------------------------|
| isOpen                | boolean                     | Contrôle l'affichage de la modale.                         |
| onClose               | () => void                 | Fonction appelée pour fermer la modale.                    |
| title                 | string                      | Titre de la modale.                                        |
| children              | React.ReactNode            | Contenu de la modale.                                      |
| className             | string                      | Classes CSS personnalisées.                                 |
| style                 | React.CSSProperties         | Styles en ligne personnalisés.                              |
| showCancelButton      | boolean                     | Affiche le bouton "Annuler".                               |
| showConfirmButton     | boolean                     | Affiche le bouton "Confirmer".                             |
| showOkButton          | boolean                     | Affiche le bouton "OK". (Par défaut, il est affiché)      |
| cancelButtonText      | string                      | Texte du bouton "Annuler".                                 |
| confirmButtonText     | string                      | Texte du bouton "Confirmer".                               |
| okButtonText          | string                      | Texte du bouton "OK".                                     |
| onCancel              | () => void                 | Fonction appelée lorsque l'utilisateur clique sur "Annuler".|
| onConfirm             | () => void                 | Fonction appelée lorsque l'utilisateur clique sur "Confirmer".|
| onOk                  | () => void                 | Fonction appelée lorsque l'utilisateur clique sur "OK". Si non spécifié, la modale se ferme. |

## Exemples d'Utilisation

1. Modale avec uniquement le bouton OK
```jsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title="Titre de la Modale"
  showOkButton={true}
  onOk={closeModal}
>
  <p>Contenu de la modale</p>
</Modal>
```
2. Modale avec boutons d'action
```jsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title="Confirmation"
  showCancelButton={true}
  showConfirmButton={true}
  onCancel={closeModal}
  onConfirm={() => {
    alert('Action confirmée!');
    closeModal();
  }}
>
  <p>Êtes-vous sûr de vouloir continuer ?</p>
</Modal>
```
## Contribuer
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir des problèmes ou des demandes de tirage pour améliorer ce plugin.

## License
Ce projet est sous licence ISC.