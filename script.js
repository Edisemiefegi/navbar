const nav = document.getElementById('nav')
const links = document.querySelector('.links')

// console.log(links.classList.contains('links'));

// nav.addEventListener('click', function(){
//     if(links.classList.contains('hide')){
//         links.classList.remove('hide')
//     }else{
//         links.classList.add('hide')
//     }
// })

nav.addEventListener('click', function(){
    links.classList.toggle('hide')
})