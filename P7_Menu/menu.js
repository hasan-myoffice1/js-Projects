const menu = [ 
    {
        id: 1,
        title : "buttermilk pancakes",
        category:"breakfast",
        price:15.98,
        img :"https://images.pexels.com/photos/718739/pexels-photo-718739.jpeg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa officiis tempora minus molestiae magni corporis ullam id, dicta quasi?"
    },
    {
        id: 2,
        title : "diner double",
        category:"lunch",
        price:12.98,
        img :"https://images.pexels.com/photos/10922926/pexels-photo-10922926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa officiis tempora minus molestiae magni corporis ullam id, dicta quasi?"
    },
    {
        id: 3,
        title : "Photo details",
        category:"lunch",
        price:12.98,
        img :"https://images.pexels.com/photos/20943936/pexels-photo-20943936/free-photo-of-a-stew-in-a-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa officiis tempora minus molestiae magni corporis ullam id, dicta quasi?"
    },
    {
        id: 4,
        title : "breakfast",
        category:"diner",
        price:12.98,
        img :"https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa officiis tempora minus molestiae magni corporis ullam id, dicta quasi?"
    },
    {
        id: 5,
        title : "Photo details",
        category:"shakes",
        price:12.98,
        img :"https://images.pexels.com/photos/20422195/pexels-photo-20422195/free-photo-of-meal-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In culpa officiis tempora minus molestiae magni corporis ullam id, dicta quasi?"
    },
   
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector('.btn-container');


//load item
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
});




function displayMenuItems(menuItem){
    let displayMenu = menuItem.map(function(item){
        // console.log(item);
        return `
            <article class="menu-item">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">
                         ${item.desc}
                    </p>
                </div>
            </article>
        `;
    })
   displayMenu = displayMenu.join("");
   sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(
        function(values, item){
            if(!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );
    const categoryBtns = categories.map(function(category){
        return `<div class="btn-container">
                  <button class="filter-btn" type="button" data-id="${category}">${category}</button>
                </div>`
    }).join('');
    
    container.innerHTML= categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

     //filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            // console.log(e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                // console.log(menuItem.category);
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === "all"){
                displayMenuItems(menu);
            } else{
                displayMenuItems(menuCategory)
            }
        });
    });
}