//local reviews data
const reviews = [
    {
        id: 1,
        name:"Susan smith",
        job:"web developer",
        img:"https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg",
        text: "consectetur adipisicing elit. Nobis natus magni commodi quisquam error nam animi fuga mollitia tempora vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus magni commodi quisquam error nam animi fuga mollitia tempora vitae?"
    },
    {
        id: 2,
        name:"anna johnson",
        job:"web designer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s",
        text: "consectetur adipisicing elit. Nobis natus magni commodi quisquam error nam animi fuga mollitia tempora vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus magni commodi quisquam error nam animi fuga mollitia tempora vitae?"
    },
    {
        id: 3,
        name:"Al Bashar",
        job:"UX designer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePfyBAiE7Z7et85ZVMCbGbTzedENA7KEaMg&s",
        text: "consectetur adipisicing elit. Nobis natus magni commodi quisquam error nam animi fuga mollitia tempora vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus magni commodi quisquam error nam animi fuga mollitia tempora vitae?"
    },
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//set starting item

let currentItem = 1;

//load intial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson()
})

//show person based on item

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;  
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
})
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
        
    }
    showPerson();
})

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()
})