Consider the following line
a = a + 2

on the left side we have variable called a, on the right side we have expression which is evaluated into variable a being incremented by two. Therefore we can say that the result of the expression (right part of equation) is being assiged (=) to the variable (a) on the left side. Please note that we always follow from right to left when evaluating such lines. This means that if we would have a case like:
var a = 2;
var b = 3;
var c = b = a + 2;
then the expression a + 2 would be evaluated as first, which is equal 4. Then the value (4) would be assigned to the variable b, as it is second part of the equation from the right. At the very end the value (4) would be assigned from variable (b) to variable (c).