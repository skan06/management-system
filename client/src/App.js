import Home from "./pages/home/Home";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Home />
      </div>
    </DndProvider>
  );
}

export default App;
