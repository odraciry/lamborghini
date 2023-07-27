const bt = document.getElementById('button');
const milenio = document.getElementById('milenio');
const seculo = document.getElementById('seculo');
const decada = document.getElementById('decada');
const ano = document.getElementById('ano');
const elements = document.getElementsByClassName('ano');
let numberCarro = 0
const anoCarro = (number) => {
    // milenio.className = 'aumentar'
    // milenio.style.animationIterationCount = 'initial'
    milenio.innerHTML = Math.floor(number / 1000);
    // seculo.className = 'aumentar'
    // seculo.style.animationIterationCount = 'initial'
    seculo.innerHTML = Math.floor((number % 1000) / 100);
    // decada.className = 'aumentar'
    // decada.style.animationIterationCount = 'initial'
    decada.innerHTML = Math.floor((number / 10) % 10);
    // ano.className = 'aumentar'
    // ano.style.animationIterationCount = 'initial'
    ano.innerHTML = Math.floor(number % 10);
}

const trocaCarro = () => {
    numberCarro += 1;
    if (numberCarro === 7) numberCarro = 0;
    document.getElementById('introducao').style.display = numberCarro === 0 ? 'block' : 'none'
    document.getElementById('data').style.display = numberCarro === 0 ? 'none' : 'flex'

    switch (numberCarro) {
        case 0:
            document.getElementById('carro').style.backgroundImage = 'none'
            document.getElementById('nome').innerHTML = ' '
            break;
        case 1:
            // document.getElementById('nome').style.animationIterationCount = 'initial'
            // trocaAno(2023, 2011)
            document.getElementById('nome').innerHTML = 'Lamborghini Aventador S'
            document.getElementById('nome').style.animation = 'transicaoCarro 4s ease-in-out forwards infinite'
            setTimeout(() => {
                anoCarro(2011)
                document.getElementById('nome').style.animationIterationCount = 'initial'
                document.getElementById('nome').style.animationDirection = 'normal'
            }, 3000)
            setTimeout(() => {
                document.getElementById('carro').style.animationName = 'entraCarro'
                document.getElementById('carro').style.backgroundImage = "url('img/lamborghini-aventador-s.png')"
            }, 2000)
            // document.getElementById('nome').style.animation = 'transicaoCarro 4s ease-in-out forwards'
            break;
        case 2:
            // trocaAno(2023, 2018)
            document.getElementById('nome').innerHTML = 'Lamborghini Aventador SVJ'
            document.getElementById('nome').style.animation = 'transicaoCarro 4s ease-in-out forwards infinite'
            setTimeout(() => {
                anoCarro(2018)
                document.getElementById('nome').style.animationIterationCount = 'initial'
                document.getElementById('nome').style.animationDirection = 'normal'
            }, 2000)
            document.getElementById('carro').style.animation = 'saiCarro 1s ease-in-out forwards'
            setTimeout(() => {
                document.getElementById('carro').style.animationName = 'entraCarro'
                document.getElementById('carro').style.backgroundImage = "url('img/lamborghini-aventador-svj.png')"
            }, 2000)
            // setTimeout(()=>document.getElementById('carro').style.animationPlayState = 'paused', 3000)
            break;
        case 3:
            // trocaAno(2018, 2014)
            document.getElementById('nome').innerHTML = 'Lamborghini Huracan White'
            document.getElementById('nome').style.animation = 'transicaoCarro 4s ease-in-out forwards infinite'
            setTimeout(() => {
                anoCarro(2014)
                document.getElementById('nome').style.animationIterationCount = 'initial'
                document.getElementById('nome').style.animationDirection = 'normal'
            }, 2000)
            document.getElementById('carro').style.animation = 'saiCarro 1s ease-in-out forwards'
            setTimeout(() => {
                document.getElementById('carro').style.animationName = 'entraCarro'
                document.getElementById('carro').style.backgroundImage = "url('img/lamborghini-huracan-white.png')"
            }, 2000)
            break;
        case 4:
            // trocaAno(2014, 2013)
            document.getElementById('nome').innerHTML = 'Lamborghini Selfish'
            document.getElementById('nome').style.animation = 'transicaoCarro 4s ease-in-out forwards infinite'
            setTimeout(() => {
                anoCarro(2013)
                document.getElementById('nome').style.animationIterationCount = 'initial'
                document.getElementById('nome').style.animationDirection = 'normal'
            }, 2000)
            document.getElementById('carro').style.animation = 'saiCarro 1s ease-in-out forwards'
            setTimeout(() => {
                document.getElementById('carro').style.animationName = 'entraCarro'
                document.getElementById('carro').style.backgroundImage = "url('img/lamborghini-selfish.png')"
            }, 2000)
            break;
        case 5:
            // trocaAno(2013, 2018)
            document.getElementById('nome').innerHTML = 'Lamborghini Urus'
            document.getElementById('nome').style.animation = 'transicaoCarro 4s ease-in-out forwards infinite'
            setTimeout(() => {
                anoCarro(2018)
                document.getElementById('nome').style.animationIterationCount = 'initial'
                document.getElementById('nome').style.animationDirection = 'normal'
            }, 2000)
            document.getElementById('carro').style.animation = 'saiCarro 1s ease-in-out forwards'
            setTimeout(() => {
                document.getElementById('carro').style.animationName = 'entraCarro'
                document.getElementById('carro').style.backgroundImage = "url('img/lamborghini-urus.png')"
            }, 2000)
            break;
        case 6:
            // trocaAno(2018, 2011)
            document.getElementById('nome').innerHTML = 'Lamborghini Aventador'
            document.getElementById('nome').style.animation = 'transicaoCarro 4s ease-in-out forwards infinite'
            setTimeout(() => {
                anoCarro(2011)
                document.getElementById('nome').style.animationIterationCount = 'initial'
                document.getElementById('nome').style.animationDirection = 'normal'
            }, 2000)
            document.getElementById('carro').style.animation = 'saiCarro 1s ease-in-out forwards'
            setTimeout(() => {
                document.getElementById('carro').style.animationName = 'entraCarro'
                document.getElementById('carro').style.backgroundImage = "url('img/lamborghini-aventador.png')"
            }, 2000)
            break;
        case 7:
            // trocaAno(2011, 2013)
            document.getElementById('nome').innerHTML = 'Lamborghini Veneno'
            document.getElementById('nome').style.animation = 'transicaoCarro 4s ease-in-out forwards infinite'
            setTimeout(() => {
                anoCarro(2013)
                document.getElementById('nome').style.animationIterationCount = 'initial'
                document.getElementById('nome').style.animationDirection = 'normal'
            }, 2000)
            document.getElementById('carro').style.animation = 'saiCarro 1s ease-in-out forwards'
            setTimeout(() => {
                document.getElementById('carro').style.animationName = 'entraCarro'
                document.getElementById('carro').style.backgroundImage = "url('img/lamborghini-veneno-silver.png')"
            }, 2000)
            break;
        default:
            document.getElementById('introducao').style.display = numberCarro === 0 ? 'block' : 'none'
            break;
    }

}

bt.addEventListener('click', () => {
    // trocaAno(2023, 2014)
    // setTimeout(()=>document.getElementById('nome').className= 'aumentar' ,200)
    
    trocaCarro()
})

// milenio.innerHTML = Math.floor(number / 1000);
// seculo.innerHTML = Math.floor((number % 1000) / 100);
// decada.innerHTML = Math.floor((number / 10) % 10);
// ano.innerHTML = Math.floor(number % 10);