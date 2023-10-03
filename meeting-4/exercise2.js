//IIFE
console.log((
    function(n1, n2) {
        return n1 > n2 ? n1 : n2;
    }
)(2, 4));

//Callback function
function biggest(n1, n2, callback)
{
    const result = n1 > n2 ? n1 : n2;
    callback(result);
};

biggest(2, 4, function (result){
    console.log(result);
});