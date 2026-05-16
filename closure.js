// A clean closure example: a private bank balance
function createAccount(initialBalance) {
    let balance = initialBalance; // private state

    function withdraw(amount) {
        if (amount > balance) {
            return `Not enough funds. Current balance: ${balance}`;
        }
        balance -= amount;
        return `Withdrawn ${amount}. Remaining balance: ${balance}`;
    }

    function deposit(amount) {
        balance += amount;
        return `Deposited ${amount}. New balance: ${balance}`;
    }

    function getBalance() {
        return `Current balance: ${balance}`;
    }

    return {
        withdraw,
        deposit,
        getBalance,
    };
}

const account = createAccount(500);
console.log(account.getBalance());      // Current balance: 500
console.log(account.withdraw(100));    // Withdrawn 100. Remaining balance: 400
console.log(account.deposit(250));     // Deposited 250. New balance: 650
console.log(account.withdraw(700));    // Not enough funds. Current balance: 650
console.log(account.getBalance());      // Current balance: 650
   