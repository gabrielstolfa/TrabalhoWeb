const showBtn = document.getElementById('showWorks')

const projectDiv = document.querySelector('.projectCards')

showBtn.addEventListener('click', function(){
    //Controlando o display do DOOM
    showBtn.style.display = 'none';
    projectDiv.classList.remove('hidden')
 
    //Pegando cada card e adicionando a classe 'show' a eles
    const cards = document.querySelectorAll('.card')
    cards.forEach((card,i)=>{
        setTimeout(()=>{
            card.classList.add('show')
        }, i * 150)
    })
})