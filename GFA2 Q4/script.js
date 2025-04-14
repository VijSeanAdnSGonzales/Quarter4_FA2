function generateTable() {
  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);
  const output = document.getElementById('output');

  // Clear previous output
  output.innerHTML = '';

  // Validate input
  if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
    alert("Please enter numbers between 2 and 10");
    return;
  }

  // Generate table using nested loop
  for (let i = start; i <= end; i++) {
    let row = `<h3>Multiplication Table for ${i}</h3><ul>`;
    for (let j = 1; j <= 10; j++) {
      if (j === 5) continue; // Example of `continue`: skip multiplying by 5
      if (j === 9) break;    // Example of `break`: stop before multiplying by 9
      row += `<li>${i} × ${j} = ${i * j}</li>`;
    }
    row += '</ul>';
    output.innerHTML += row;
  }
}