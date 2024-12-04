async function solve() {
    // Fetch solution from Netlify Function
    const response = await fetch('/.netlify/functions/solver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}), // Send data if needed
    });
    const data = await response.json();

    // Get the grid element
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = ''; // Clear previous grid

    // Render the 8x8 grid
    data.grid.forEach(row => {
        row.forEach(cell => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');

            // Add different classes based on cell value
            if (cell === 1) {
                cellElement.classList.add('block-1'); // Blue for 'L' piece
            } else if (cell === 2) {
                cellElement.classList.add('block-2'); // Red for 'Square' piece
            } else {
                cellElement.classList.add('empty'); // Light grey for empty cells
            }

            gridElement.appendChild(cellElement);
        });
    });
}
