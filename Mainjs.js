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
    window.location.href = "index.html";
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
        alert("Message Sent! Thank You For Your Feedback!");
    }
}



function bought() {
    if(document.getElementById("total").innerHTML === "0"){
        alert("Cart is empty!")
    }else{
        var pop = document.getElementById("popinfo");
        pop.style.visibility = "visible";
    }

}

function clearTotal() {
    var k = 0;
    document.getElementById("total").innerHTML = "0";
    total = 0;
    while(k <  20){
        prodquant[k] = 0;
        k++;
    }

}
function hide(){
    var pop = document.getElementById("popup");
    pop.style.visibility = "hidden";
    

  
}
var total = 0;
var prodindex;
var prodquant = [];
var prodprice;
function show(i, price){
    prodindex = i;
    prodprice = price;

    var pop = document.getElementById("popup");
    var images = ["sofa1.png","chair1.png","chair2.png","chair3.png","chair4.png","table1.png","table2.png","table3.png","table4.png","table5.png","storage1.png","storage2.png","storage3.png","storage4.png","storage5.png","bed1.png","bed2.png","bed3.png","bed4.png","bed5.png"];
    var text =["The sofa combines simplicity with comfort, featuring a thick seat, padded armrests, and soft back cushions that provide a cozy seating experience. Its lightweight design makes it easy to move, whether you're rearranging your current space or transitioning to a new home. The slightly angled metal legs not only contribute to the sofa's stability but also add a unique touch, giving it a distinct personality that complements various decor styles."
                ,"Elevate your space with this stylish Gray Chair that marries functionality with elegance. Its sleek design effortlessly complements any interior, making it a versatile addition to your home. Constructed with durable plastic and eco friendly wood veneers, it offers a robust yet lightweight solution for modern living. Easy to reposition to suit your changing needs, this chair is not just a piece of furniture, but a statement of sophisticated practicality."
                ,"Each armchair is meticulously handmade by skilled craftspeople, ensuring its individuality and uniqueness. Crafted from rattan, a natural material renowned for its timeless beauty, the armchair ages gracefully, developing its own distinct character over time. Lightweight and easy to maneuver, it allows for effortless cleaning or furniture rearrangement. Additionally, plastic feet safeguard your floors from scratches, adding to both the practicality and longevity of this charming piece."
                ,"Embrace the perfect blend of comfort and style with this armchair's timeless design. Its versatile nature allows for effortless placement in diverse room settings, ensuring seamless coordination with your existing decor. Crafted for those who appreciate their personal space yet enjoy the option to engage with others, this armchair offers a sanctuary for relaxation in any open environment. Whether you're unwinding solo or mingling with company, it's the ideal choice for modern living."
                ,"Discover the ultimate relaxation experience with our armchair, featuring a layer-glued bent wood frame that offers a gentle resilience. Designed for those cherished moments of repose, this piece invites you to sink into its embrace. The high back is meticulously crafted to provide superior neck support, ensuring maximum comfort during your downtime."
                ,"Elevate your living space with this sleek and modern two-tier coffee table. The upper level features a clear, sturdy glass top perfect for displaying your favorite coffee table books or decorative items, while the lower shelf, finished in a sophisticated matte black, provides additional storage for magazines, remote controls, or other essentials. The clean lines of the metal frame give this piece a contemporary look that will complement any decor style. Whether anchoring your living room or adding functionality to an office or den, this versatile coffee table is both stylish and practical."
                ,"This sleek and modern desk seamlessly combines functionality with style. The black body contrasts elegantly with the natural wood top, creating a sophisticated look suitable for both home and office environments. A bold red accent adds a pop of color, while the built-in storage drawer and cable management hole ensure practicality for everyday use. Minimalistic yet striking, this desk appeals to those who appreciate contemporary furniture designs."
                ,"With its spacious Leg room configuration, this desk maximizes room space by fitting perfectly in any corner. The light wood tabletop contrasts elegantly with the matte black frame and drawers. It features two sets of drawers on each side, providing ample storage for a computer, papers, and other essentials. Smooth metal handles add a contemporary touch. Whether you're working from home or need a study area, this desk offers a spacious working surface and a chic design that complements any room."
                ,"Designed for both form and function. The spacious tabletop provides ample room for your computer, office supplies, and personal items, all while maintaining a clean and organized look. Crafted with a durable light wood finish, it's both stylish and easy to maintain. The sturdy white metal legs feature adjustable feet to ensure stability on any surface, making it an ideal choice for any home or office setting. Whether you're working from home or in a professional environment, this desk offers the perfect blend of simplicity and efficiency to boost your productivity in style."
                ,"This sleek, modern desk designed for versatility and style. The spacious tabletop provides ample room for your computer, office supplies, and any other essentials you need to keep within easy reach. Crafted with a sturdy frame and finished in a classic black hue, it seamlessly blends with any decor while promising long-lasting durability. Whether you're tackling the workday or engaging in creative endeavors, this desk is the perfect foundation for productivity and comfort in any home or office setting."
                ,"Elevate your bedroom's aesthetics and organization with this sleek, contemporary dresser. Crafted with a minimalist design, it features six spacious drawers that glide smoothly on metal runners, perfect for storing all your garments and linens. The natural wood finish adds a touch of warmth to any decor, while the clean lines and flat-front drawers ensure it complements any interior style. Durable construction promises longevity, making this dresser not just a statement piece but also a practical investment for your home."
                ,"Crafted with a minimalist design, the clean lines and crisp white finish of this versatile piece will complement any decor. Featuring four equally sized compartments, it offers ample storage to showcase books, decorative items, or organize daily essentials. Durable and easy to assemble, this contemporary shelf is not only a practical addition but also an aesthetic enhancement to your home or office."
                ,"Elevate your living space with this elegant corner bookshelf that seamlessly blends functionality and style. Crafted from high-quality materials, this sturdy shelving unit features a rich wood finish that exudes warmth and sophistication. Its unique corner design maximizes space efficiency, making it an ideal solution for those looking to optimize their storage without compromising on aesthetics. With multiple tiers of shelving, it offers ample room to showcase your favorite books, decorative items, and collectibles. Whether in a cozy reading nook or as a statement piece in your office, this corner bookshelf is sure to enhance the ambiance of any room while keeping your belongings organized and accessible."
                ,"Modern Black Shelving Unit This sleek black shelving unit features ten compartments arranged symmetrically. With five shelves dividing the unit into two columns, it offers versatile storage for books, decor, or other items. Whether used as a bookshelf, display case, or room divider, this piece combines functionality and style. Its clean lines and robust construction make it suitable for various decor styles, promising both elegance and durability. Ideal for home or office use, this shelving unit declutters and organizes with flair."
                ,"This sleek column shelf unit, featuring a clean white finish and a contemporary design, offers both functionality and style for your living space. The unit includes four spacious open shelves that provide ample room to display books, decorative items, or collectibles. Below the shelves are two drawers with silver-tone handles that add a modern touch while offering additional storage for items you prefer to keep out of sight. This versatile piece is perfect for organizing your belongings in any room, from the living room to the bedroom or home office."
                ,"Elevate your bedroom with this chic and contemporary bed frame. Crafted with care, it features an upholstered headboard in a soothing muted green color. The metal frame adds a touch of industrial flair, while the quilted-top mattress ensures both style and comfort. Whether you're redesigning your master suite or creating a cozy guest room, this bed frame is a versatile choice that combines aesthetics and functionality."
                ,"This sleek platform bed features a dark-stained wooden frame with clean lines, exuding contemporary elegance. The minimalist headboard design complements various bedroom styles. The thick, comfortable mattress promises restful nights. Crafted for both comfort and style, this bed is the perfect addition to any modern bedroom."
                ,"This modern platform bed seamlessly combines style and functionality. Crafted from light-colored wood, it features built-in storage drawers on one side. The minimalist design ensures a clean and airy appearance, while the smooth-gliding drawers provide ample space to keep your bedroom organized. Perfect for those seeking a chic bed with hidden storage options."
                ,"This sophisticated bed frame features a sleek design with clean lines and a minimalist aesthetic. Constructed from high-quality materials, the bed frame showcases a sturdy build with a neutral color palette that complements any bedroom decor. The gently curved headboard adds an elegant touch, while the overall low-profile silhouette ensures easy accessibility and a contemporary look."
                ,"This sophisticated black metal bed frame features clean lines and an elegantly curved headboard with ornamental knobs. Its minimalist design is perfect for modern bedroom interiors, creating a sleek and inviting atmosphere. Sturdy construction ensures a restful night's sleep. Available in various sizes."]
    document.getElementById("popimage").src = images[i];
    document.getElementById("poptext").innerText = text[i];
    if(prodquant[i] > 0){
        document.getElementById("quant").value = prodquant[i]
    } else{
        document.getElementById("quant").value = 0;
    }
    
    pop.style.visibility = "visible";
}

function addquan(){

    var currquant = parseInt(document.getElementById("quant").value, 10);
    currquant += 1;
    total += prodprice;
    document.getElementById("quant").value = currquant;
}

function minquan(){
    var currquant = parseInt(document.getElementById("quant").value, 10);
    if(currquant > 0) {
        total -= prodprice;
        currquant -= 1;
        document.getElementById("quant").value = currquant;
    } 
}

    function totalis(){
        var pop = document.getElementById("popup");
        
        if(document.getElementById("quant").value != 0) {
            prodquant[prodindex] = document.getElementById("quant").value;
        document.getElementById("total").innerHTML = total;
        pop.style.visibility = "hidden";
        quantID = 0;
        }
        else if(document.getElementById("quant").value == 0){
            document.getElementById("total").innerHTML = total;
            prodquant[prodindex] = document.getElementById("quant").value;
            pop.style.visibility = "hidden";
            
        }else{
            alert("error!");
        }
        
    }

   function submitinfo(){
    var k = 0;
    var pop = document.getElementById("popinfo");
    var name = document.getElementById("infoname").value;
    var email = document.getElementById("infoem").value;
    var add = document.getElementById("infoadd").value;
    
    if(name === "" || email === "" || add === ""){
        alert("Please Do not leave anything blank");
    } else{
        total = 0;
        while(k <  20){
            prodquant[k] = 0;
            k++;
        }
        alert("Your Product Will be Delivered Soon!");
        pop.style.visibility = "hidden";
        document.getElementById("infoname").value = "";
        document.getElementById("infoem").value = "";
        document.getElementById("infoadd").value = "";
        document.getElementById("total").innerHTML = "0";
        
    }
    }
    function hidepopinfo(){
        var pop = document.getElementById("popinfo");
        

    
            document.getElementById("infoname").value = "";
            document.getElementById("infoem").value = "";
            document.getElementById("infoadd").value = "";
            pop.style.visibility = "hidden";
    
        }
