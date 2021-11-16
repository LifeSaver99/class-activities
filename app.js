let myFunction = () => {
    document.getElementById('change').innerHTML = 'Hello world';
}
document.addEventListener("click", function(){
    document.getElementById("heading").style.color = 'green'
});


document.addEventListener("click", function(){
    document.getElementsByTagName('li')[2].style.color = "blue"
});
    document.addEventListener("click", function(){
document.getElementById("currencylist").style.color = "green"});