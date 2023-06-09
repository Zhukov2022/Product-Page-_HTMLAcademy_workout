import ReactDOM from "react-dom";
import { product } from "./mock";
import ProductPage from "/src/product-page/product-page";

const rootElement = document.getElementById("root");
ReactDOM.render(<ProductPage product={product} />, rootElement);
