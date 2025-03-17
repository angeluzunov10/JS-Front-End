function catsInfo(catsArr){
    class Cat {
        name;
        age;
    
        constructor (name, age){
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    let cats = [];

    for (let each of catsArr) {
        let [name, age] = each.split(' ');

        let cat = new Cat(name, age);
        
        cats.push(cat);
    }

    for (each of cats){
        each.meow();
    }
}