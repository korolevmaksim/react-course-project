// Object destructing

//
// const person = {
//     name: 'Maksim',
//     age: 29,
//     location: {
//         city: 'Minsk',
//         temp: 88
//     }
// };
//
// const {name: firstName = 'Anonymous', age} = person;
//
//
// console.log(`${firstName} is ${age}`);
//
// const {city, temp: temperature} = person.location;
//
//
// if (city && temperature){
//
//     console.log(`It's ${temperature} in ${city}.`);
// }
//
//
//
// const book = {
//     title: 'Ego in the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// let {title, author} = book;
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


//
// Array destructing
//


// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//
// const [, , state = 'Minsk'] = address;
//
// console.log(`Your are in  ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , mediumPrice, ] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);

