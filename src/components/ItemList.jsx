import Item from "./Item";

export default function ItemList({ items, onDeleteItem, onTogglePacked }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        props={item}
                        onDeleteItem={onDeleteItem}
                        onTogglePacked={onTogglePacked}
                    />
                ))}
            </ul>
        </div>
    );
}
