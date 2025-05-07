const formatString = (input: string, toUpper: boolean = true ) : string => {
    if(toUpper){
        return input.toUpperCase()
    }
    else {
        return input.toLowerCase()
    }
}

const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
    const filteredArr = items.filter(item => item.rating >= 4)
    return filteredArr
}

const concatenateArrays = <T>(...arrays : T[][]) : T[] => {
    let arr : T[] = []
    arrays.forEach(item => arr = arr.concat(item))
    return arr
}

class Vehicle {
    private make : string
    private year : number
    constructor(make:string, year: number){
        this.make = make 
        this.year = year
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model : string
    constructor(make:string, year: number, model: string){
        super(make, year)
        this.model = model
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}

const processValue = (input: string | number) : number => {
    if(typeof input === 'string'){
        return input.length
    }
    else {
        return input * 2
    }
}

interface Product {
    name: string;
    price: number;
  }

const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if(products.length === 0) {
        return null
    }
    else {
        let expensiveProduct : Product = products[0];
        products.forEach(product => {
            if(expensiveProduct.price < product.price){
                expensiveProduct = product
            }
        })
        return expensiveProduct
    }
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

const getType = (day: Day) : string => {
    if(day === Day.Sunday){
        return `Weekend ^-^`
    }
    else {
        return `Weekday ;-;`
    }
}

const squareAsync = async(n: number) : Promise<number> => {
    return new Promise((resolve, reject) => {
        if(n < 0){
            reject("Negative number is not allowed you dum")
        }
        else {
            setTimeout(()=>resolve(n*n),1000)
        }
    })
}