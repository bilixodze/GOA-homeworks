// Account კლასის შექმნა
class Account {
    constructor(firstName, lastName, email, password, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }

    // ინფორმაციის დაბეჭდვა
    printDetails() {
        return `
            სახელი: ${this.firstName}<br>
            გვარი: ${this.lastName}<br>
            იმეილი: ${this.email}<br>
            საცხოვრებელი ქალაქი: ${this.city}<br>
        `;
    }
}

// Accounts მასივი
const accounts = [];

// ფორმის მონაცემების დამუშავება
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // შესატანი ველების მნიშვნელობების მიღება
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const city = document.getElementById('city').value;

    // ახალი Account ობიექტის შექმნა
    const newAccount = new Account(firstName, lastName, email, password, city);

    // ობიექტის დამატება accounts მასივში
    accounts.push(newAccount);

    // ფორმის ველების გასუფთავება
    document.getElementById('registrationForm').reset();

    // მომხმარებლების სიის განახლება
    updateAccountList();
});

// მომხმარებლების სიის განახლება
function updateAccountList() {
    const accountList = document.getElementById('accountList');
    accountList.innerHTML = ''; // არსებული სიის გასუფთავება

    accounts.forEach((account, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `მომხმარებელი ${index + 1}:<br>${account.printDetails()}`;
        accountList.appendChild(listItem);
    });
}