let navigation = document.querySelector('.navigation');

document.querySelector('.menuToggle').onclick = function(){
    console.log('ahoj')
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}
