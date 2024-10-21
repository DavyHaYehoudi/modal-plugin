# React Modal Plugin

A reusable modal component for React apps, written in TypeScript. This plugin provides a simple interface to display custom modals with action buttons.

## Installation

To install the plugin, use npm :

```bash
npm install @davy-dev/react-modal-plugin
```

or

```bash
yarn add @davy-dev/react-modal-plugin
```

## Use

Import the Modal component into your React file :

```jsx
import Modal from "react-modal-plugin";
```

Here is an example of using the modal component :

```jsx
import { useState } from 'react';
import Modal from 'react-modal-plugin';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open the Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Title of the Modal"
        showCancelButton={true}
        showConfirmButton={true}
        cancelButtonText="Cancel"
        confirmButtonText="Confirm"
        cancelButtonClassName = ""
        confirmButtonClassName = "",
        okButtonClassName = ""
        onCancel={closeModal}
        onConfirm={() => {
          alert('Action confirmed!');
          closeModal();
        }}
      >
        <p>Content of the modal</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Component Properties

| Property             | Type                    | Required | Default Value | Description                                                                 |
|----------------------|-------------------------|----------|---------------|-----------------------------------------------------------------------------|
| `isOpen`             | `boolean`               | Yes      | N/A           | Controls the visibility of the modal.                                       |
| `onClose`            | `() => void`            | Yes      | N/A           | Function to close the modal.                                                |
| `title`              | `React.ReactNode`       | Yes      | N/A           | The title of the modal, can be a string or JSX.                             |
| `children`           | `React.ReactNode`       | No       | N/A           | Content of the modal.                                                       |
| `className`          | `string`                | No       | `""`          | Optional CSS classes for additional styling of the modal.                   |
| `style`              | `React.CSSProperties`   | No       | `{}`          | Inline styles for the modal.                                                |
| `showCancelButton`   | `boolean`               | No       | `false`       | Controls whether to display the "Cancel" button.                            |
| `showOkButton`       | `boolean`               | No       | `true`        | Controls whether to display the "OK" button.                                |
| `cancelButtonText`   | `string`                | No       | `"Cancel"`    | Text for the "Cancel" button.                                               |
| `okButtonText`       | `string`                | No       | `"OK"`        | Text for the "OK" button.                                                   |
| `cancelButtonClassName` | `string`             | No       | `""`          | Optional CSS classes for the "Cancel" button.                               |
| `okButtonClassName`  | `string`                | No       | `""`          | Optional CSS classes for the "OK" button.                                   |
| `onCancel`           | `() => void`            | No       | N/A           | Function to execute when the "Cancel" button is clicked.                    |
| `onOk`               | `() => void`            | No       | `onClose`     | Function to execute when the "OK" button is clicked (defaults to `onClose`).|



## Examples of Use

1. Modal with only a title and the OK button that closes the modal

```jsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title="Title of the Modal"
>
</Modal>
```
2. Modal with a custom title, content and the OK button that closes the modal

```jsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title={<h2 style={{ color: "blue" }}>Custom Title with HTML</h2>}
>
  <p>Content of the modal</p>
</Modal>
```

3. Modal with action buttons

```jsx
<Modal
  isOpen={isOpen}
  onClose={closeModal}
  title="Confirmation"
  showCancelButton={true}
  cancelButtonClassName="my-cancel-button"
  onCancel={closeModal}
  showOkButton={() => {
    alert("Action confirmed!");
    closeModal();
  }}
>
  <p>Are you sure you want to continue ?</p>
</Modal>
```

## Contribute

Plugin simply created for the needs of a personal project.

## License

This plugin is free.
