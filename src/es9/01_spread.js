const user = {
    username: 'Luis',
    age: 34,
    country: 'Mexico'
}

const {username, ...values} = user;
console.log(username);
console.log(values);