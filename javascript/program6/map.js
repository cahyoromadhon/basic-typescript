// Hari kita akan mempelajari teori yang diajarkan oleh Nova Design free resource learning platform in youtube
// How Map Method actually works in javascript

const number = [1, 2, 3, 4];
const doubled = number.map(identifier => identifier * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

const string = ['cat', 'dog'];
const tandaseru = string.map(seru => seru + '!');
console.log(tandaseru); // Output: ['cat!', 'dog!']

// it's pretty simple right?
// common usecase in real world application
const orders = [
    { id: 'ORD001', customer: 'Bob', total: 149.9, createdAt: '2023-01-01', status: 'delivered' },
    { id: 'ORD002', customer: 'Alice', total: 79.5, createdAt: '2023-01-02', status: 'pending' },
    { id: 'ORD003', customer: 'Eve', total: 199.0, createdAt: '2023-01-03', status: 'shipped' },
];

const customers = orders.map(order => order.customer);
console.log(customers); // Output: ['Bob', 'Alice', 'Eve']
// human readable using map method

const customerr = orders.map(order => ({
    customer: order.customer,
    date: order.createdAt,
}));
console.log(customerr); // Output: [{ customer: 'Bob', date: '2023-01-01' }, { customer: 'Alice', date: '2023-01-02' }, { customer: 'Eve', date: '2023-01-03' }]