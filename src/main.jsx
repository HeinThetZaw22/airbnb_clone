import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from 'react-router-dom'
import Container from "./components/Container.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
       <Container>
         <App />
       </Container>
    </BrowserRouter>
);
