document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tran-form').addEventListener('submit', function(e) {
        e.preventDefault();
 const type = document.getElementById('type').value;
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
    if (type === '' || name === '' || amount === '') {
            alert('Please enter all fields');
            return;
        }

        const transaction = { type, name, amount: parseFloat(amount) };
        addTransaction(transaction);
        document.getElementById('tran-form').reset();
    });
});

function addTransaction(transaction) {
    const tr = document.createElement('tr');

    tr.innerHTML = `<td>${transaction.type}</td>
                    <td>${transaction.name}</td>
                    <td>$${transaction.amount.toFixed(2)}</td>
                    <td><span class="delete-btn">Delete</span></td> `;

    document.getElementById('tran-list').appendChild(tr);
    
    tr.querySelector('.delete-btn').addEventListener('click', function() {
        tr.remove();
    });
}
