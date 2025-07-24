import Header from "./components/Header";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Stats from "./components/Stats";

import "./index.css";
import { useState } from "react";

export default function App() {
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems((prevItems) => [...prevItems, item]);
    }
    function handleDeleteItem(id) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
    function handleTogglePacked(id) {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    return (
        <div className="app">
            <Header />
            <Form onAddItem={handleAddItem} />
            <ItemList
                items={items}
                onDeleteItem={handleDeleteItem}
                onTogglePacked={handleTogglePacked}
            />
            <Stats items={items} />
        </div>
    );
}
