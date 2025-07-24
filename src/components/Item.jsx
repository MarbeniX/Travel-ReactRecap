export default function Item({ props }) {
    return (
        <li>
            <span
                style={props.packed ? { textDecoration: "line-through" } : {}}
            >
                {props.description} {props.quantity}
            </span>
            <button>❌</button>
        </li>
    );
}
