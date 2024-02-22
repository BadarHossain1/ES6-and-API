
//practice task 1

const add = (a,b,c) =>{
    const add = a+b+c;
    // console.log(add);
    return add;
}

add(2,32,69);

//practice question 2

const string = `I am a web developer
I love to code
I love to eat biryani`;

// console.log(string);


//practice question 3

const addition = (a,b=4) =>{
    return a+b;

}

// console.log(addition(2));

//practice question 4

const friends = (arr) =>{
    for(const friend of arr){
        if(friend.length%2==0){
            // console.log(friend);
        }
    }
    arr.push("Tahsin");
    return arr;

}

// console.log(friends(["Badar","Ali","Khan"]));

//practice question 5

const squares = (arr) =>{
    let sum = 0;
    let second=[];
    for(const num of arr){
        second.push(num*num);
        sum+=num*num;


    }
    let average = sum/arr.length;
    return average;
}

// console.log(squares([2,3,4,5]));

//practice question 6

const combine = (arr1,arr2) =>{
    
    const combined = arr1.concat(arr2);
    let arr3 = [];
    for(const num of combined){
        arr3.push(num);
    }
    console.log(arr3);
    return Math.max(...arr3);
}


// console.log(combine([1,2,3],[4,5,6]));