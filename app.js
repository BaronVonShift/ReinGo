let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[itemSlider.length - 1]);
      thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
      carouselDom.classList.remove('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    }, timeAutoNext);
}


const clickSound = new Audio('sounds/click.wav');

document.getElementById('next').addEventListener('click', () => {
  clickSound.play();
  setTimeout(() => swooshSound.play(), 300); // slight delay for smoothness
});
document.getElementById('prev').addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    setTimeout(() => {
      swooshSound.currentTime = 0;
      swooshSound.play();
    }, 300);
  });
  
  const music = new Audio('sounds/upbeat.mp3');
  music.loop = true;
  music.volume = 0.4;
  
  // Play music after any user click (browser autoplay restriction)
  let musicStarted = false;
  
  document.body.addEventListener('click', () => {
    if (!musicStarted) {
      music.play().then(() => {
        musicStarted = true;
      }).catch((err) => {
        console.error("Autoplay error:", err);
      });
    }
  }, { once: true });
  
  // Mute/unmute toggle
  const soundIcon = document.getElementById('sound-icon');
  document.getElementById('audio-toggle').addEventListener('click', (e) => {
    e.stopPropagation(); // So it doesn’t re-trigger play
    if (music.muted) {
      music.muted = false;
      soundIcon.src = 'Images/tone-on.png';
    } else {
      music.muted = true;
      soundIcon.src = 'Images/tone-off.png';
    }
  });
  
// === Contact Modal Script ===
const contactBtn = document.getElementById('contact-link');
const contactModal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contactModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = 'none';
  }
});


 
  

