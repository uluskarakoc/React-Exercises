# spa-theme-switch

Klone dieses Repository und kopiere das Arbeitsverzeichnis deiner ToDo-App hier hinein, damit du die Aufgabe lösen kannst


## 1. Teil

 - Erstelle einen neuen Context namens `themeContext`
 - dieser soll einen state namens `theme` beinhalten
 - der theme-state soll entweder den Wert "standard" oder "special" haben, hat aber den Anfangswert "standard"


Kleine Code-Hilfe bis hierhin:

**themeContext.jsx**

```jsx
...
const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState('standard');
....
}
```


## 2. Teil
 - Erstelle eine component namens `ThemeChanger`
 - diese Component besteht aus einem Button oder ähnlichem, mit dem man das Theme auf "standard" oder "special" setzen kann



## 3. Teil
Wenn das Theme auf "special" steht, soll sich folgendes in der App verändern:

 - *TodoItem:* Hier soll anstatt "delete" das Wort "destroy" stehen
 - *InputTodo:* Anstatt "Todo hinzufügen" soll der Placeholder "Todo reinhauen" heißen
 - *TodoList:* Die Liste soll mit Hilfe einer (CSS-)Animation "pulsieren" (also größer und kleiner werden) oder Ähnliches
 - *Optional:* Du kannst noch weitere Änderungen basierend auf dem Theme durchführen

