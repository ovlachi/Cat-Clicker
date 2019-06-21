
document.getElementById("clickme").addEventListener("click", updateCounter, false);
const count = 0;
    function updateCounter() {
        count++;  
        document.getElementById("counter").innerHTML = "Counter: " + count;
    }
