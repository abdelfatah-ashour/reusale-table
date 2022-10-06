import { TableProvider } from "context/contextTable";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "screens/Home";
import { Route1 } from "screens/Route1";
import { Route2 } from "screens/Route2";

function App() {
  const navigate = useNavigate();

  function onNavigateTo(url: string) {
    navigate(url);
  }
  return (
    <TableProvider>
      <div>
        <button onClick={() => onNavigateTo("/route1")}>Route 1</button>
        <button onClick={() => onNavigateTo("/route2")}>Route 2</button>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/route1" element={<Route1 />} />
        <Route path="/route2" element={<Route2 />} />
      </Routes>
    </TableProvider>
  );
}

export default App;
