const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
 
btn.addEventListener('click', function(){
    // console.log(btn.classList.contains());
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
        console.log(video);
        
    }else{
        btn.classList.remove('slide');
        video.play();
    }
})

//preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader');
})