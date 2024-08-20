interface Person{
    name:string
    age:number
    mobile:number
}


class Vechicle{
    constructor(
        public color:string,
        public brand:string
    )

    displayInfo(){
        console.log(`The Vechicle is in ${this.color} from ${this.brand}`);        
    }
}

class Car extends Vechicle{
    typeOfvechicle(){
        console.log("Car");
        
    }
}

const car = new Car("blue","Honda");
car.displayInfo()
car.typeOfvechicle()



async function apiCall() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    return data
}

apiCall().then(data => console.log(data)
).catch(err => console.log(err.message)
)