document.addEventListener('DOMContentLoaded', function() {

    const start = [
        { type: 'Income', name: 'Salary', amount: 500 },
        { type: 'Expense', name: 'Rent', amount: 100 }
    ];
    start.forEach(transaction => addTransaction(transaction));
    document.getElementById('tran-form').addEventListener('submit', function(e) {
        e.preventDefault();
    const type = document.getElementById('type').value;
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        if (type === '' || name === '' || amount === '') {
            alert('Please enter');
            return;
        }
        const transaction = { type, name, amount: parseFloat(amount) };
        addTransaction(transaction);
        document.getElementById('tran-form').reset();
    });
});

function addTransaction(transaction) {
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${transaction.type}</td>
        <td>${transaction.name}</td>
        <td>$${transaction.amount}</td>
        <td><span class="delete-btn">Delete</span></td>
    `;
    document.getElementById('tran-list').appendChild(tr);
    tr.querySelector('.delete-btn').addEventListener('click', function() {
        tr.remove();
    });
}