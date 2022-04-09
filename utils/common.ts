const faker = require('faker');

export function generateRandomEmail() {
    return faker.internet.email();
}

export function generateUuid() {
    return faker.datatype.uuid();
}

export function generateFullName() {
    return faker.name.findName();
}
