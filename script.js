const itens = [
    {
        id: 0,
        nome: 'blusa',
        img: 'images/shirt.jpg',
        preço: 0,
        qtd: 0
    },
    {
        id: 1,
        nome: 'short',
        img: 'images/short.jpg',
        preço: 0,
        qtd: 0
    },
    {
        id: 2,
        nome: 'calça',
        img: 'images/pants.jpg',
        preço: 0,
        qtd: 0
    }
]

showShop = () => {
    let containerProduct = document.getElementById('produtos')
    itens.map((val) => {
        containerProduct.innerHTML += '<div class="single-product"><img src="'+val.img+'"/><p>'+val.nome+'</p><a key="'+val.id+'" href="#">Adicionar ao Carrinho</a></div>';
    });
}

showShop();

updateCar = () => {
    let containerCar = document.getElementById('carrinho')
    containerCar.innerHTML = ''
    itens.map((val) => {
        if(val.qtd > 0){
            containerCar.innerHTML += ' <div class="single-car"><p>Produto: '+val.nome+' </p> <p class="qtd"> Quantidade: '+val.qtd+' </p></div> ';
        }
    })
    
}

let links = document.getElementsByTagName('a')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key')
        itens[key].qtd++
        updateCar()
        return false
    })
}


