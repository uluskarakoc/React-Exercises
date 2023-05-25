import CenteredButton from "./CenteredButton";
import Header from "./Header/Header";
import Info from "./Info";
import TodoDetail from "./TodoDetail";
import TodosLogic from "./TodosLogic";
import { Routes, Route } from 'react-router-dom';


const TodoApp = () => {

  return (
    <Routes >
      <Route 
        path="/" 
        element={
          <div className="wrapper">
            <div className="todos">
              <Header />
              <TodosLogic />
            </div>
          </div>
        }
      />


      <Route 
        path="/contact"
        element={<h1>Kontakt-Seite</h1>}
        // Später soll das durch die Contact-Component ersetzt werden
      />


      <Route 
        path="/about"
        element={<h1>About-Seite</h1>}
        // Später soll das durch die About-Component ersetzt werden
      />

      
      <Route 
        path="*"
        element={<h1>404 - Seite nicht gefunden</h1>}
      />

    <Route path="/todo/:id" element={<TodoDetail />} />
    {/* dynamische Route mit dynamischer id 
    wir können jede andere Bezeichnung (anstatt id) verwenden,
    z.B path="/todo/:number", path="/todo/:name".
    
    => in der URL kann alles mögliche nach "/todo/"" eingegeben werden
    z.B. "/todo/2", "/todo/meinText", usw.
    => all das rendert unser element
    */}
 
    </Routes>
  )

}

{/* <Info />
<CenteredButton> Log in</CenteredButton> */}
{/* "Log in" wird in props.children an die 
        CenteredButton-Komponente übergeben */}

export default TodoApp;