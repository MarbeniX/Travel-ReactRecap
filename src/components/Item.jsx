export default function Item({ props, onDeleteItem, onTogglePacked }) {
    return (
        <li>
            <input
                type="checkbox"
                value={props.packed}
                onChange={() => onTogglePacked(props.id)}
            />
            <span
                style={props.packed ? { textDecoration: "line-through" } : {}}
            >
                {props.description} {props.quantity}
            </span>
            <button onClick={() => onDeleteItem(props.id)}>❌</button>
        </li>
    );
}
