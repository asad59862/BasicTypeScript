
function formatValue(value: string | number|boolean) {
  if (typeof (value) === "string") {
    return value.toUpperCase();
  }
  else if (typeof (value) == "number") {
    return value * 10;
  }
  else {
    return !value;
  }
}



function getLength(value: string | number[]) {
  if (typeof (value) === "string") {
    return value.length;
  }
  else {
    return value.length;
  }
}



class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return (`Name: ${this.name}, Age: ${this.age}`)
  }
}



type obj = {
  title: string;
  rating: number;
};

function filterByRating(value: obj[]) {
  
  let newArray: obj[] = [];
  
  value.map(v => {
    if (v.rating>= 4) {
      newArray.push(v);
     }
  })
  return newArray;
}


type user={
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users:user[]){
  let ActiveUser: user[] = [];
  users.filter(u => {
    if (u.isActive == true) {
      ActiveUser.push(u);
    }
  })
  return ActiveUser;
}




interface Book{
  title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean,
}
function printBookDetails(value: Book) {

  if (value.isAvailable == true) {
     console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: Yes`
  );
  } else {
         console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: No`
  );
  }

}


function getUniqueValues(arr1: any[], arr2: any[]) {
  const mergedArray = [...arr1, ...arr2];
  const uniqueArray = [...new Set(mergedArray)];
  return uniqueArray;
}



interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const totalPrice = products.reduce((accumulator, product) => {
    const BasePrice = product.price * product.quantity;

    let DiscountPrice = BasePrice;
    if (product.discount !== undefined && product.discount >= 0 && product.discount <= 100) {
      const discountMultiplier = 1 - (product.discount / 100);
      DiscountPrice = BasePrice * discountMultiplier;
    }

    return accumulator + DiscountPrice;
  }, 0); 

  return totalPrice;
}