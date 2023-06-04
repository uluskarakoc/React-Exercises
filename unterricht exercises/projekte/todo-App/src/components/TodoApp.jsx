import CenteredButton from "./CenteredButton";
import Header from "./Header/Header";
import Info from "./Info";
import TodoDetail from "./TodoDetail";
import TodosLogic from "./TodosLogic";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeChanger from "./ThemeChanger";

const TodoApp = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <div className="wrapper">
              {" "}
              <div className="todos">
                {" "}
                <Header /> <TodosLogic /> <ThemeChanger />
              </div>{" "}
            </div>
          }
        />
        <Route path="/contact" element={<h1>Kontakt-Seite</h1>} />
        <Route path="/about" element={<h1>About-Seite</h1>} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="*" element={<h1>404 - Seite nicht gefunden</h1>} />
      </Routes>
    </ThemeProvider>
  );
};

export default TodoApp;
