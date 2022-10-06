import { useNavigate } from "react-router-dom";
import "./style.sass";

export default function Home(): JSX.Element {
  const navigate = useNavigate();

  function onNavigateTo(url: string) {
    navigate(url);
  }

  return (
    <div>
      <button onClick={() => onNavigateTo("/route1")}>Route 1</button>
      <button onClick={() => onNavigateTo("/route2")}>Route 2</button>
    </div>
  );
}
