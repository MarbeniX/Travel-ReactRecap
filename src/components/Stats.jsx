export default function Stats({ items }) {
    if (items.length === 0) {
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list!</em>
            </footer>
        );
    }

    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = Math.round((packedItems / totalItems) * 100);

    return (
        <footer className="stats">
            <em>
                {packedPercentage === 100
                    ? "You got everything!"
                    : `You have ${totalItems} on your list, and you already packed ${packedItems} (${packedPercentage}%)`}
            </em>
        </footer>
    );
}
