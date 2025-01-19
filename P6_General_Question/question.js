//using selector inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function(qu){
    // console.log(qu); 
    const btn = qu.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener("click", function() {
        questions.forEach(function(item){
            if(item !== qu){
                item.classList.remove("show-text");
            }
        });
        qu.classList.toggle("show-text");
    })
    
    
})

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e){
//        const question = e.currentTarget.parentElement.parentElement;
//        question.classList.toggle('show-text');
//     })
// })