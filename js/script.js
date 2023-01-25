// function to trigger animation


document.querySelector('.button').addEventListener('click', () => {
  document.querySelector('.menu__list')
    .classList.toggle('menu__list--animate');
});

// // // // // // // // // // // // // // // // // // // // // // // // // 

const gallery = document.getElementById("gallery");

window.onmousemove = e => {
const mouseX = e.clientX,
      mouseY = e.clientY;

const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

const maxX = gallery.offsetWidth - window.innerWidth,
      maxY = gallery.offsetHeight - window.innerHeight;

const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

gallery.animate({
  transform: `translate(${panX}px, ${panY}px)`
}, {
  duration: 4000,
  fill: "forwards",
  easing: "ease"
})
}



// ******************************* //


// List profile

window.setInterval(scrollTrigger('.code-animation'),5000);


function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}





///******************************************** */

var list = document.querySelectorAll(".item a");

for (var i = 0; i < list.length; i++) {
	var url = list[i].children[0].getAttribute("src");
  list[i].style.backgroundImage="url('" + url + "')";
}
