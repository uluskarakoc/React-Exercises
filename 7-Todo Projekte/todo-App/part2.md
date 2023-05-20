- React Komponenten
  - Erklärung der grundlegenden Bausteine von React, Komponenten genannt
  - Komponenten sind unabhängige, wiederverwendbare Teile, die zusammen eine Anwendung bilden
  - Beispiel: 
  ```jsx
  function Willkommen(props) {
    return <h1>Hallo, {props.name}</h1>;
  }
  ```

- React Fragments und Mehrfach JSX
  - Erläuterung von Fragments, die es ermöglichen, mehrere Elemente zu gruppieren
  - JSX ermöglicht die Verwendung von HTML in React
  - Beispiel:
  ```jsx
  function Tabelle() {
    return (
      <>
        <td>Zeile 1</td>
        <td>Zeile 2</td>
      </>
    );
  }
  ```

- Erstellen anderer Komponentendateien
  - Erklärung, wie man zusätzliche Komponentendateien erstellt und importiert
  - Verbessert die Wartbarkeit und Lesbarkeit des Codes
  - Beispiel:
  ```jsx
  import React from 'react';
  import MeineKomponente from './MeineKomponente';

  function App() {
    return <MeineKomponente />;
  }
  ```

- React Strict Mode
  - Einführung in den Strict Mode, der dabei hilft, potenzielle Probleme im Code zu finden
  - Wird in der Entwicklungsumgebung verwendet, hat keinen Einfluss auf die Produktionsversion
  - Beispiel:


  ```jsx
  import React from 'react';

  function App() {
    return (
      <React.StrictMode>
        <MeineKomponente />
      </React.StrictMode>
    );
  }
  ```

- Das React Datenmodell
  - Erläuterung des Datenflusses und der Datenverwaltung in React
  - Einführung in "props" 
  - Beispiel props:
  
```jsx
function Willkommensnachricht(props) {
  return <h1>Hallo, {props.name}</h1>;
}

function App() {
  return <Willkommensnachricht name="Max" />;
}
```

- Rendering von State-Daten
  - Erläuterung, wie man Daten in der Benutzeroberfläche darstellt
  - Beispiel:

```jsx
function MeineKomponente() {
  const namen = ['Max', 'Anna', 'Tom'];
  return (
    <ul>
      {namen.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
```

- Der Key Prop für Listenelemente
  - Erläuterung der Bedeutung von Keys in Listenelementen
  - Schlüssel helfen React, Änderungen in Listen zu identifizieren
  - Beispiel:
  ```jsx
  const zahlen = [1, 2, 3, 4, 5];
  const listItems = zahlen.map((zahl) =>
    <li key={zahl.toString()}>
      {zahl}
    </li>
  );
  ```