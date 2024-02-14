import { TodoHead } from "./components/TodoHead.jsx";
import { TodoContainer } from "./components/TodoContainer.jsx";
import { GlobalStyle } from "./style/GlobalStyle.jsx";

/*
   부모 컴포넌트 App 
 */
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoHead />
      <TodoContainer />
    </>
  );
}

export default App;
