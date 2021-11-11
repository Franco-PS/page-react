import "bootstrap/dist/css/bootstrap.min.css";
import './scss/app.scss';
import { NavBar } from "./component/NavBar";

export function App() {
  return (
    <div>
      <NavBar />
      <h1>hola como estas</h1>
    </div>
  );
}
