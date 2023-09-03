//criando um carrinho de compras.

const shoppingCart = [];//aray lista vazia

//funcao para adicionar itens no carrinho
function addItemToCart(item){
    shoppingCart.push(item)
}

//removendo item do carrinho
function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item)//utilizamos o indexOf para verificar se o item realmente existe no carrinho.
    if(index !== -1){//a condicao !== serve para validar se o item não é menos 1 o que significa que o item esta no carrinho
        shoppingCart.splice(index,1)//o splice vai na varivel do carrinho e vai remover um item da variavel index
    }
}

//visualizacao do carrinho
function viewCart(){
    if(shoppingCart.lenght == 0){//se o tamanho do carrinho for igual a zero então traz a mensagem abaixo
        console.log("Your shopping cart is empty.");
    } else{
        console.log("Itens in your shopping cart: ");//se não ele traz a mensagem que tem itens no carrinho e abre um for pra trazer esses itens enquanto "i" for menor que o tamanho da array do carrinho
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)//mostra no console o item no seguinte modelo "1 - item", "2 - item" e assim por diante até acabar os itens da array
        }
    }
}

//funcao para limpar o carrinho
function clearCart(){
    shoppingCart.lenght = 0;//zera a array
    console.log("Your shopping cart has been cleared.")
}

//adicionando itens ao carrinho
addItemToCart("Tennis");
addItemToCart("Blouse");
addItemToCart("Shoes");

//Visualizando o carrinho
viewCart()

//Tirando um item do carrinho
removeItemFromCart("Blouse");
viewCart();

//limpando o carrinho
clearCart();
viewCart();