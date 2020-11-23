'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #surname = 'Shuplat';
    say = () => {
        console.log(`Name user: ${this.name} ${this.#surmane}, age: ${this.age}`);

    }
    get age () {
        return this._age;
    }

    set age (age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('error');
        }
    }

}

const vitalii = new User('Vitalii', 34);