﻿export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        You have: {numItems} items on your list, you already packed {numPacked}{' '}
        ({percentage}%)
      </em>
    </footer>
  );
}
