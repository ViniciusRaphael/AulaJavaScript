
/* ANOTAÇÕES */

/* 1o Sistema de cadastro de clientes */

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
const numCliente = 1234;

console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(numCliente);

idade = 25;
console.log(idade)

/* Possíveis variáveis para detalhe da conta */
let valorEmprestimo = 150000;
let taxaDeJuros = 10;
let ehBomPagador = "SIM";
ehBomPagador = true;

let meuNome = "Manuel";
console.log("Meu nome é " + meuNome);

let minhaIdade = 25;
console.log("Minha idade é " + minhaIdade); //número se torna String


let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
const numCliente = 1234;

console.log("Boa tarde Sr. " + nome + " " + sobrenome + ". Sua idade é:" + idade)


/* Sistema de Supermercado */
let nome1 = "Toddy";
let preco = 6.99;
let validade = true;


console.log(nome1);
console.log(preco);
console.log(validade);

/* Comparação valores */
let precoTenisA = 169.99;
let precoTenisB = "169.99";
console.log(precoTenisA == precoTenisB); //true porque converte o texto pra número
console.log(precoTenisA === precoTenisB); //false porque === é extritamente e verifica o tipo do dado antes


/* Operador lógico */
// ! significa NÃO
let cpfValido = true;
console.log(!cpfValido); // false
let senhaValida = false;
console.log(!senhaValida); // true

// && significa E
// True se ambos forem True, qualquer mistura com um False retorna False
console.log(cpfValido && senhaValida); //false porque um é True e outro False

// || significa OU
// False apenas de todos os valores forem False, se houver um True, retorna True
let exp1 = true;
let exp2 = false;
console.log(exp1 || exp2); //true

// Ordem dos operadores é (! NÃO) > (&& E) > (OU ||)


/* Estruturas Condicionais*/
    if (condicao){
        // Bloco de código 1
    }else if(condicao2){
        // Bloco de código 2
    }else{
        //Blogo de código 3
    }

    if(valorCompra > 350){
        console.log("Você ganhou frete grátis");
    }else{
        console.log("Adicionei mais produtos para ganhar frete grátis");
    }


/* Switch */
    switch(expressao){
        case "rotulo1":
            // Bloco de codigo 1
            break;
        case "rotulo2":
            // Bloco de codigo 2
            break;
        case "rotulo3":
            // Blogo de codigo 3
            break;
        default:
            // Bloco de codigo defatul
    }

/* Operador Ternário */
    (condicao) ? operando1 : operando2;

            /* Esse código é simplicado */
    if(ehBomPagador){
        console.log("O Cliente " + nome + " é bom pagador.");
    } 
    else{console.log("O cliente " + nome + " não é bom pagador");
    }

            /* E se torna esse */
    console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador." : " não é bom pagador."));


/* LOOPS - Laços de repetiçao */
        /* FOR */
    for(atribuição; condição; atualização){
        //bloco de código
    }

    /* Contador de 0 a 50 */
    for(let cont = 1 ; cont <= 20; cont++){
        console.log(cont);
    }

    for(let cont= 10; cont > 0 ; cont--){
        console.log(cont);
    }
    console.log("FELIZ ANO NOVO");

        /* WHILE */
    let soma = 0;
    let numero ;
    while(soma < 100){
        numero = parseInt(prompt("Insira um número:"));
        soma = soma + numero;
        console.log(numero);
    }

        /* DO WHILE */
    do{
        numero = parseInt(prompt("Insira um número:"));
        soma = soma + numero;
        console.log(numero)
    }while(soma < 100);

        /* BREAK */
    /* Roda infinitamente até que o match acontece, ai ele para */
    while(true){
        valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "));
        if(valorEmprestimo === 0){
            break;
        }
        numAnos = parseInt(prompt("Digite a quantidade de anos: "));
        juros = valorEmprestimo * taxaDeJuros * numAnos;
        montante = valorEmprestimo + juros;
        console.log(montante)
    }

        /* CONTINUE */
        /* Print números pares usando continue */
        for(let cont1  =1; cont1 <= 20; cont1++){
            if (cont1 % 2 != 0){
                continue;
            }
            console.log(cont1)
        }

/* FUNÇÕES */
        /* Declaração de função */
    function nomeFuncao(param1, param2, param3){
        //Bloco de código
        return //retorna algo
    }
    nomeFuncao(valor1,valor2,valor3);

    /* Função calculando a média */
    function media(param1, param2, param3){
        total = ((param1 + param2 + param3) / 3)
        return total
    }
    console.log(media(10,20,30))

    /* Expressão de função */
    const media = function calculaMedia(num1,num2,num3){
        let total = ((num1 + num2 + num3) / 3);
        return total
    }
    console.log(media(10,20,30))

    /* Função anônima
    Pois retiramos o nome dela */
    const media = function (num1,num2,num3){
        let total = ((num1 + num2 + num3) / 3);
        return total
    }
    console.log(media(10,20,30))

    /* Arrow Function - Função Seta 
    Simplifica a Função */
    const media = (num1,num2,num3) => {
        let total = ((num1 + num2 + num3) /3 );
        return total;
    }
    console.log(media(10,20,30))

    /* Arrow function com 1 parâmetro só
    Fica ainda mais simples o código */
    const areaQuadrado = lado =>{
        return lado * lado
    }
    /* Arrow function com 1 parâmetro 
    da para simplifica ainda mais 
    Não é indicado para códigos mais complexos*/
    const areaQuadrado = lado => lado * lado

/* Escopo */
    /* Global e Local */

let nome = "Raphael"; // Global

function sauda(){
    let saudacao = "Olá Sr. " + nome; //Local
    return saudacao
}
console.log(sauda());
console.log(saudacao); // não retorna pois é Local

/* Parâmetros */
/* Exemplo de Parâmetro com quantidade definida */
function calculaArea(lado){
    let area = lado * lado;
    return area
}

/* Exemplo de Parâmetro com valor padrão
Se não for colocado, a função complementa com o pré-definino */
function somaTresNumeros( num1 = 2, num2 = 5, num3 = 9){
    return num1 + num2 + num3;
}
console.log(somaTresNumeros()); // retorna 16
console.log(somaTresNumeros(10)); // retorna 24
console.log(somaTresNumeros(10,8)); // retorna 27
console.log(somaTresNumeros(10,5,6)); // retorna 21

/* Parâmetro rest */
/* Transforma um número indeterminado de parâmetros em uma lista */
function exibeNumeros (...numeros){
    console.log(numeros);
}
exibeNumeros(1); //[1]
exibeNumeros(1,2,3); //[1,2,3]

/* Array (Matriz) */
/* Variável Simples - Só armazena 1 valor por ver
Variável Composta - Armanza mais de um valor em uma variável */

const array1 =  ["Elemento0", "Elemento1", "Elemento2"];  // forma mais comum
const array2 = Array("Elemento0", "Elemento1", "Elemento2");
const array3 = new Array("Elemento0", "Elemento1", "Elemento2");

const lista = ["Manuel", 24, true, "Silva"];
console.log(lista[0]); //acessa o 1o elemento "Manuel"

    /* Adicionando elementos ao Array */
const frutas = [];
frutas[0] = "Abacaxi";
frutas[1] = "Laranja";
frutas[2] = "Maça";

console.log(frutas)

    /* Editando elementos */
const frutas1 = ["Abacaxi","Laranja","Maça","Limao"];

frutas1[0] = "Melancia";
frutas1[2] = "Uva"

    /* Métodos em Arrays - Funções */
    /* Push - Adiciona um ou mais elementos ao final do array */
const frutas2 = ["Maça","Banana"];
frutas2.push("Melancia");
console.log(frutas2); //["Maça","Banana","Melancia"]
frutas2.push("Uva","Mamão");
console.log(frutas2); //["Maça","Banana","Melancia","Uva","Mamão"]

    /* Unshift adiciona um ou mais elementos ao início do array */
const frutas3 = ["Maça","Banana"];
frutas3.unshift("Melancia","Uva");
console.log(frutas3); //["Melancia","Uva","Maça","Banana"]

    /* pop remove o último elemento */
    /* shift remove o primeiro elemento */
    /* splice remove o intervalo de elementos */
const frutas4 = ["Maça","Banana","Melancia","Uva","Mamão"];
haha = frutas4.splice(3,2) // indice e quantidade após o índice
console.log(frutas4)

    /* Os métodos também armazenam os elementos */
const frutas5 = ["Maça","Banana","Melancia","Uva","Mamão"];
let varShift = frutas5.shift();
let varPop = frutas5.pop();
let varSplice = frutas5.splice(1,2);
console.log(varPop); // Maça
console.log(varShift); // Mamão
console.log(varSplice); // "Melancia","Uva"

    /* Buscar Índice */
    /* indexof retorna o índice do elemento informado */
const frutas6 = ["Maça","Banana","Melancia","Uva","Mamão"];
let indice1 = frutas6.indexOf("Banana")
console.log(indice1) // 1
console.log(frutas6[indice1]) // Banana

    /* sort ordena por ordem alfabética */
const frutas7 = ["Maça","Banana","Melancia","Uva","Mamão"];
frutas7.sort();
console.log(frutas7) // ["Banana", "Mamão", "Maça", "Melancia", "Uva"]

    /* reserve coloca na ordem invertida da lista, não necessariamente alfabética */
const frutas8 = ["Maça","Banana","Melancia","Uva","Mamão"];
frutas8.reverse();
console.log(frutas8);

frutas8.sort().reverse()

    /* map quando queremos mapear um array de origem e gerar um novo */
const numeros = [1,4,9,16];
const novosNumeros = numeros.map((numero) => numero * 2);
console.log(novosNumeros); //[2,8,18,32]

    /* filter filtra os elementos de um array e gera um novo array */
const numero = [1,4,9,16];
const impares = numero.filter((numero) => numero % 2 === 1);
console.log(impares); //[1.9]

const numeros = [10,20,30,40,50];
const maior25 = numeros.filter((numero) => numero > 25);
console.log(maior25); //[30, 40, 50]

    /* find obtém o primeiro elemento do array que satisfaz a condição */
const numeros = [10,15,25,55,40];
const num = numeros.find((numero) => numero > 25);
console.log(num); //55

    /* findIndex retorna o index do primeiro elemento que satisfaz a condição */
const numeros = [10,15,25,55,40];
const num = numeros.findIndex((numero) => numero > 25);
console.log(num); //3

/* Acesso Aleatório em Arrays */
    /* Math objetivo que ajuda a trabalhar com números */

    /* Math random gera um número aleatório */
console.log(Math.random()); // De 0 a 1 sem incluir o 1
console.log(Math.random() * 3); // De 0 a 3 sem incluir o 3

    /* Math.floor retorna o número arredondando pra baixo */
// 1.9 vira 1
// 0.87 vira 0
console.log(Math.floor(Math.random() * 4 )); //De 0 a 3, incluindo o 3

    /* Sorteio */
const nomes = ["Manuel","Edval","Bruno","José","Caio","Pedro"];
let indiceAleatorio = Math.floor(Math.random() * 6);
console.log(nomes[indiceAleatorio]);


const frutas = ["Melancia","Banana","Morando","Uva"];

    /* Laço For Tradicional */
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

    /* Laço For In */
for(let indice in frutas){
    console.log(frutas[indice]);
}

    /* Laço For Of */
for(let fruta of frutas){
    console.log(fruta);
}

    /* Laço For Each - Tem menos desempenho*/
frutas.forEach((fruta, indice) => {
    console.log(fruta);
    console.log("Fruta " + indice + ": " + fruta );
});

/* Arrays Multidimensionais */
    /* Arrays Bidimensionais - Array de Arrays*/
    /* Itens organizados em uma matriz de linhas e colunas */
const letras = [["A","B","C"], ["D","E","F"], ["G","H","I"]]
console.log(letras)

const cliente = [["Edival", 24, true], ["Manuel", 24, true], ["Raphael", 19, true]];
console.log(cliente);
console.table(cliente); // mostra em tabela

    /* Para acessar um elemento */
console.log(cliente[1][0])  // Edival
console.log(cliente[1][1])  // 24

    /*Adicionando novo item ao array */
cliente.push(["Bruno",27,false]) // adiciona no final
cliente.pop() // remove o array do final

/* Percorrendo Arrays Bidimensionais */
    /* Loop aninhado - Loop dentro de loop */
const quadroDeFuncionarios = [["Financeiro","Kilma","Daniel"], ["Marketing","Sarah", "Leticia"],["Diretoria","Keila","Marcos"]]
quadroDeFuncionarios.forEach((array, indiceArray) => {
    array.forEach((itemArray, indiceItemArray) => {
        console.log(itemArray);
    })
})


/* Objetos - coleções de propriedade. Em Python são dicionários*/
const carro = {
    nome:"Fiesta",
    marca:"Ford",
    cor:"Amarelo",
    ano:2012,
    emplacado:true,
    consumo: 11,
    capacidadeTanque: 45,
    motor:{
        cavalos:126,
        cilindradas:1.6
    },
    kmPercorridos: function(){
        return `O ${nome} percorre ${consumo * capacidadeTanque} KM com tanque cheio.`;
    }
};
console.log(carro.kmPercorridos())

/* Notação por pontos */
carro.nome; // Fiesta
carro.motor.cavalos // 126

/* Notação por colchetes */
carro['nome']; // Fiesta
carro['motor']['cavalos'] //126

carro.cor = "Azul" // altera a propriedade

delete carro.nome; // deleta a propriedade
carro.consumo = 10; // adiciona essa propriedade

/* Métodos Object */
    /* Keys() - retorna os valores de cada propriedade*/
const chaves = Object.keys(carro)

    /* Values() - retorna os valores de cada propriedade*/
const valores = Object.values(carro)

    /* Entries() = retorna array com elementos também arrays correspondente aos pares 
    de propriedades [chave:valor] */
const ctuple = Object.entries(carro)

    /* Assign() - copia propriedade de um objeto de origem para um de destino*/
const carros3 = Object.assign(carro1);
/* let's add some line */

    /* For Of usando Entries */
for (const [chave, valor] of Object.entries(carro)){
    console.log(`${chave}: ${valor}`);
}

    /* Objetos o tempo todo */
    /* Podemos usar método para acessar propriedades de strings */

let meuNome = "Manuel Silva"
meuNome.length; // 12
meuNome[7]; // S
meuNome.indexOf("nuel"); //2 porque ela se inicia na posição 2
meuNome.indexOf("José"); //-1 porque a substring não pertence à string

let emailValido = "manuel@email.com";
emailValido.includes("@"); // true
let emailValido = "manuel.email2.com";
emailValido.includes("@"); // false

meuNome.toLowerCase(); // manuel silva
meuNome.toUpperCase(); // MANUEL SILVA

meuNome = meuNome.replace("Silva", "Neto"); // Manuel Neto *é preciso reassignar em uma nova variável

    /* Percorrendo String */
function falaCebolinha(frase){
    let fraseCebolinha = "";
    for (let letra of frase){
        if(letra == "r"){
            fraseCebolinha += "l";
        }else{
            fraseCebolinha += letra;
        }
    }
    return fraseCebolinha;
}
console.log(falaCebolinha("Eu quero duas laranjas"))


    /* Desestruturando objetos */
let nome = carro.nome //"Fiesta"
let marca = carro.marca //"Ford"

/* se torna */
const {nome, marca} = carro;
console.log(nome) // "Fiesta"
console.log(marca) //"Ford"

    /* Desestruturando objetos aninhados */
const {motor: {cavalos}} = carro;
console.log(cavalos); //126

/* Erros */
    /* 3 tipos de erros: Lógico, Sintaxe ou Execução */
    /* Erro lógico - na lógica do código */

    /* Erro de sintaxe - quando digitamos algo errado*/
alert("Hello world");
aalert("Hello World"); //reference error - aalert is not defined

    /* Erro de execução */
let x = y + 10;
console.log(x); // reference error - y is not defined

let y = 2;
if(true){
    let x = y + 10;
}
console.log(x) // Uncaught reference x - porque X está no escope local e o print no escope global

let num = 1;
num.toUpperCase(); //TypeError por não ser string não consegue converter para maiúsculo

/* Tratamento de Exceção */
// try/catch
try{
    //Tente executar
}catch(erro){
    //Se der errado, execute esse código
}

    /*Exemplo 1*/
try{
    let x = y + 10;
    console.log(x)
}catch(erro){
    console.log(erro);
    console.log(erro.name);
    console.log(erro.message)
}

    /*Exemplo 2*/
try{
    let num = 1;
    num.toUpperCase();
}catch(erro){
    console.log(erro);
    console.log(erro.name);
    console.log(erro.message)
}

// Finally - Sempre será executado, independente de ter erro
try{
    //Tente executar esse código
}catch(erro){
    //Se der errado, execute esse código

}finally{
    //De tora forma, execute esse código
}

    /* Exemplo 1*/
try{
    let num = "1";
    num.toUpperCase();
}catch(erro){
    console.log(erro);
    console.log(erro.name);
    console.log(erro.message)
}finally{
    console.log("Fim da instrução try/catch/finally");
}

    /* Como lançar exceções */
function soma(x, y){
    if(typeof x !== "number"){
        throw TypeError("O primeiro argumento deve ser um número")
    }
    if(typeof y !== "number"){
        throw TypeError("O primeiro argumento deve ser um número")
    }
    return x + y
}

try{
    console.log(soma("a",5));
}catch(erro){
    console.log(erro)
}

try{
    console.log(soma(6,"b"));
}catch(erro){
    console.log(erro)
}

try{
    console.log(soma(6,4));
}catch(erro){
    console.log(erro)
}

/* Múltiplos try/catch */
try{
}catch(erro){
    if (erro instanceof erroTipo1){
    }else if (erro instanceof erroTipo2){
    }else{
    }
}

    /* Exemplo 1 */
try{
    let x = y + 10;
    console.log(x);
}catch(erro){
    if (erro instanceof TypeError){
        console.log("Type Error")
    }else if (erro instanceof ReferenceError){
        console.log("Reference Error")
    }
}