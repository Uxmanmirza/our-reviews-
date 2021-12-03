const reviews = [
   { id: 1,
   name : "marks"
   job : "CEO facebook"
   img :
   "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.planetware.com%2Fwpimages%2F2020%2F02%2Ffrance-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg&imgrefurl=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Ffrance-f.htm&tbnid=YXgcNflll9kS8M&vet=12ahUKEwi2nPyw8sf0AhUB-YUKHTPCCL8QMygAegUIARDPAQ..i&docid=0N6qTt3P-PlepM&w=730&h=487&itg=1&q=picture&ved=2ahUKEwi2nPyw8sf0AhUB-YUKHTPCCL8QMygAegUIARDPAQ"
text :
"em, ipsum dolor sit amet consectetur adipisicing elit. Velit cumque impedit voluptas voluptate ducimus nam quibusdam quo earum non sapiente ipsum, perferendis, et quas nobis."
   }
   {
       id: 2,
name : "mark"
job : "CEO "
img :
"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.planetware.com%2Fwpimages%2F2020%2F02%2Ffrance-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg&imgrefurl=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Ffrance-f.htm&tbnid=YXgcNflll9kS8M&vet=12ahUKEwi2nPyw8sf0AhUB-YUKHTPCCL8QMygAegUIARDPAQ..i&docid=0N6qTt3P-PlepM&w=730&h=487&itg=1&q=picture&ved=2ahUKEwi2nPyw8sf0AhUB-YUKHTPCCL8QMygAegUIARDPAQ"
text :
"em, ipsum dolor sit amet consectetur adipisicing elit. Velit cumque impedit voluptas voluptate ducimus nam quibusdam quo earum non sapiente ipsum, perferendis, et quas nobis."
   }
   {id: 3,
name : "marked"
job : "CEO facebook"
img :
"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.planetware.com%2Fwpimages%2F2020%2F02%2Ffrance-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg&imgrefurl=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Ffrance-f.htm&tbnid=YXgcNflll9kS8M&vet=12ahUKEwi2nPyw8sf0AhUB-YUKHTPCCL8QMygAegUIARDPAQ..i&docid=0N6qTt3P-PlepM&w=730&h=487&itg=1&q=picture&ved=2ahUKEwi2nPyw8sf0AhUB-YUKHTPCCL8QMygAegUIARDPAQ"
text :
"em, ipsum dolor sit amet consectetur adipisicing elit. Velit cumque impedit voluptas voluptate ducimus nam quibusdam quo earum non sapiente ipsum, perferendis, et quas nobis."
   }];

//    select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const surBtn = document.querySelector(".surBtn");

// set starting items
let currentItem = 0;

// load initial items
window.addEventListener("DOMContentloaded", function (){
    showPerson( );

}); 

// show person based on item

function showPerson(
    person
){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

// show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if( currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson( );
});

// show prev person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if( currentItem < ){

        currentItem = reviews.length -1;
    }
    showPerson( );
});
