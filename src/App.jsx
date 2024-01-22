import "./CSS/reset.css";
import "./CSS/App.css";
import { TodoHead } from "./components/Thead.jsx";
import { TodoBody } from "./components/Tbody.jsx";

/*
   부모 컴포넌트 App 
 */
function App() {
  return (
    <>
      <TodoHead />

      <TodoBody />
    </>
  );
}

export default App;
