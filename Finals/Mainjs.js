var i = 0;
var txt = "Shop Now!";
var speed = 50;     
        function typeWriter() {
             

                if (i < txt.length) {
                     document.getElementById("typing").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
        }
        
        function showslides() {
            var images = ["bgimage1.jpg", "bgimage2.jpg", "bgimage3.jpg", "bgimage4.jpg"]; 
            var currentImageIndex = 0;
            setInterval(function() {
                var imageUrl = images[currentImageIndex];
                document.querySelector(".fronthome").style.animation = "fadeOut 1s";
                setTimeout(function() {
            document.querySelector(".fronthome").style.animation = "none";
        }, 1000);
                document.querySelector(".fronthome").style.backgroundImage = "url(" + imageUrl + ")";
                currentImageIndex = (currentImageIndex + 1) % images.length;
            }, 5000); 
        }

        function start() {
            typeWriter();
            showslides();
        }   

var attempt = 0;
function Login(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "James" && password == "ocariza") {
        document.getElementById("username").value = null;
        document.getElementById("password").value = null;
        window.location.href = "finals.html";
    }else{
        attempt++
        if(attempt == 3){
            document.getElementById("incalert").innerText = "Login Attempts Exceeded! Wait 5 minutes to continue";
            document.getElementById("btnlogin").disabled = true;
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("username").value = null;
            document.getElementById("password").value = null;
            setTimeout(function() {
                document.getElementById("btnlogin").disabled = false;
                document.getElementById("username").disabled = false;
                document.getElementById("password").disabled = false;
                attempt = 0;
        }, 5 * 60 * 1000);
        } else{
            document.getElementById("username").value = null;
            document.getElementById("password").value = null;
            document.getElementById("incalert").innerText = "Incorrect Password or Username!";
            setTimeout(function() {
                document.getElementById("incalert").innerText = null;
        }, 5000);
        }
    }
}

function logout(){
    window.location.href = "Login.html";
}

function contact_submit(){
    var name = document.getElementById("cname").value;
    var email = document.getElementById("cmail").value;
    var message = document.getElementById("cmessage").value;

    if(name === "" || email === "" || message === ""){
        alert("Please Do not leave anything blank");
    } else{
        document.getElementById("cname").value = "";
        document.getElementById("cmail").value = "";
        document.getElementById("cmessage").value = "";
        alert("Message Sent!");
    }
return;
}

var total = 0;
function calc_total(price){
    total += price;
    document.getElementById("total").innerHTML = total;
}

function bought() {
    if(document.getElementById("total").innerHTML === "0"){
        alert("Cart is empty!")
    }else{
        document.getElementById("total").innerHTML = "0";
        alert("purchase successfull!");
        total = 0;
    }
    
}

function clearTotal() {
    document.getElementById("total").innerHTML = "0";
    total = 0;
}
function hide(){
    var pop = document.getElementById("popup");
    pop.style.visibility = "hidden";
    

  
}
function show(i){
    var pop = document.getElementById("popup");
    var images = ["sofa1.png","chair1.png","chair2.png"];
    var text =["The sofa combines simplicity with comfort, featuring a thick seat, padded armrests, and soft back cushions that provide a cozy seating experience. Its lightweight design makes it easy to move, whether you're rearranging your current space or transitioning to a new home. The slightly angled metal legs not only contribute to the sofa's stability but also add a unique touch, giving it a distinct personality that complements various decor styles."
                ,"The white table combines functionality with style, fitting seamlessly into any home decor. Its honeycomb paper construction provides both strength and lightness, making it easy to move around as needed."
                ,"Each armchair is meticulously handmade by skilled craftspeople, ensuring its individuality and uniqueness. Crafted from rattan, a natural material renowned for its timeless beauty, the armchair ages gracefully, developing its own distinct character over time. Lightweight and easy to maneuver, it allows for effortless cleaning or furniture rearrangement. Additionally, plastic feet safeguard your floors from scratches, adding to both the practicality and longevity of this charming piece."]
    document.getElementById("popimage").src = images[i];
    document.getElementById("poptext").innerText = text[i];
    pop.style.visibility = "visible";
}
