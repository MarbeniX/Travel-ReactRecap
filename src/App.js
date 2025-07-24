import Header from "./components/Header";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Stats from "./components/Stats";

import "./index.css";

export default function App() {
    return (
        <div className="app">
            <Header />
            <Form />
            <ItemList />
            <Stats />
        </div>
    );
}
