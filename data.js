const books = [
    {
        id: '1',
        title: 'We Begin At The End',
        image: 'book1.png',
        author: 'Chris Whitaker',
        category: 'Fiction',
        price: 20,
        hardcover: true,
        shipping: 'yes',
    },
    {
        id: '2',
        title: 'Building for Better Living',
        image: 'book2.png',
        author: 'A. Quincy Jones',
        category: 'Non-Fiction',
        price: 30,
        hardcover: true,
        shipping: 'no',
    },
    {
        id: '3',
        title: 'Fire On The Mountain',
        image: 'book3.png',
        author: 'Edward Abbey',
        category: 'Fiction',
        price: 15,
        hardcover: true,
        shipping: 'no',
    },
    {
        id: '4',
        title: 'The Signal',
        image: 'book4.png',
        author: 'Ron Carlson',
        category: 'Fiction',
        price: 15,
        hardcover: false,
        shipping: 'yes',
    },
    {
        id: '5',
        title: 'Neutra',
        image: 'book5.png',
        author: 'Barbara Lamprecht',
        category: 'Non-Fiction',
        price: 20,
        hardcover: false,
        shipping: 'yes',
    },
];

// backend/node export syntax
module.exports = {
    books
};
