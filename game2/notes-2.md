structure of if else:

if (boolean expression) {
    //code
} else if (boolean expression) {
    //code
} else if (boolean expression) {
    //code
} else {

}

Structure of if / else statement have following rules:
 - if statement can life alone without else statement
 - whether if statement has else part, it can only has one else part. Please consider following:

 Valid:
 if (boolean expression) {
     //code
 } else {
     //code
 }

 Invalid:

 if (boolean expression) {
     //code
 } else {
     //code
 } else {
     //code
 }

- if statement can has multiple rules. To achieve that we can reuse if after the else statement. This means that if the condition (expression) of the first if statement is false, then the next one will be evaluated. See example:

if (expression1) {
    //enters if expression1 is true
} else if (expression2) {
    //enters only if expression1 is false and expression2 is true
} else if (expression3) {
    //enters only if expression1 && expression2 are false and expression3 is true
} else {
    //enters if every other condition is false
}