
// Object Destructurring

const person = {
    name: 'Christian',
    location: {
        city: 'San Diego',
        state: 'CA'
    }
};

const { name } = person.name;
const { city, state } = person.location;

const book = {
    title: 'Neuromancer',
    author: 'William Gibson',
    publisher: {
        name: 'Ace'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

// Array Destructuring

const address = ['2511 Violet St', 'San Diego', 'CA'];
const [ street, city, state ] = address;

const item = ['Coffee', '$2.00', '$2.75', '$3.00'];
const [ type, ,price ] = item;
console.log(`A medium ${type} costs ${price}`);