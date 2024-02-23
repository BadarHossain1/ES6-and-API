const x= false; // any number (positive or negative) except 0 is true.

//any string is true except empty string like "" or '' or ``. '0' is true, 'false' is true, ' ' is true because it is not empty.

//undefined or null is false.

//NaN is false.

//empty array or object is true.

//empty function is true.

//empty string is false.

//!0, !'', !``, !false, !null, !undefined, !NaN are true.

// does '' mean its string? 
// yes, '' means empty string.
// what about "0"?
// "0" means string with 0 in it.


if(x){
    console.log('x is true');
}
else{
    console.log('x is false');

}
