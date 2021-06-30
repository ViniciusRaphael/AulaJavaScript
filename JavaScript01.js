
/* 1o Sistema de cadastro de clientes */

// let nome = "Manuel";
// let sobrenome = "Silva";
// let idade = 65;
// const numCliente = 57895778;
// let valorEmprestimo = 150000;
// let taxaDeJuros = 0.10;
// let numAnos = 6;
// let ehBomPagador = true;

/* Montante = valorEmprestimo = juros
juros = valorEmprestimo * taxaDeJuros * numAnos
*/

// let juros = valorEmprestimo * taxaDeJuros * numAnos;
// let montante = valorEmprestimo + juros;
// console.log("Valor do montante: " + montante)


/* DESAFIO 1 */
// let nota1 = 5;
// let nota2 = 6;
// let nota3 = 7;
// let nota4 = 8;
// let media = (nota1 + nota2 + nota3 + nota4) / 4;
// console.log("A média é: " + media)


/* ESTRUTURA CONDICIONAL 
Bom pagador ou não?*/

// if(ehBomPagador){
//     console.log("O Cliente " + nome + " é bom pagador.");
// } 
// else{console.log("O cliente " + nome + " não é bom pagador");
// }

/* ELSE IF - Taxa de juros por idade */
/**
18~25 -> 9%
26~35 -> 8%
36~50 -> 7%
51~mais -> 6%
*/

// if(idade >= 18 && idade <= 25){
//     taxaDeJuros = 0.09;
// }else if(idade >= 26 && idade <= 35){
//     taxaDeJuros = 0.08;
// }else if(idade >= 36 && idade <= 50){
//     taxaDeJuros = 0.07
// }else{
//     taxaDeJuros = 0.06
// }

// console.log(taxaDeJuros)

/* Empresa de Desenvolvido de Software 

Programador Junior -> 4 mil
Programador Pelno -> 5 mil
Programador Senior -> 6 mil
Testador -> 5 mil
Arquiteto -> 8 mil
Analista -> 7 mil
Gerente -> 10 mil
*/

// let cargo = "Gerente";
// switch(cargo){
//     case "Programador Junior":
//         console.log("O programador Junior recebe R$ 4.000,00");
//         break;
//     case "Programador Pleno":
//         console.log("O programador Pleno recebe R$ 5.000,00");
//         break;
//     case "Programador Senior":
//         console.log("O programador Senior recebe R$ 6.000,00");
//         break;
//     case "Testador":
//         console.log("O Testador recebe R$ 5.000,00");
//         break;
//     case "Arquiteto":
//         console.log("O Arquiteto recebe R$ 8.000,00");
//         break;
//     case "Analista":
//         console.log("O Analista recebe R$ 7.000,00");
//         break;
//     case "Gerente":
//         console.log("O Gerente recebe R$ 10.000,00");
//         break;
//     default:
//         console.log("Cargo não cadastrado no sistema.");
// }

/* Operador ternário 
Verifica a condição. Se for true retorna a primeira, senão retorna a segunda*/

// console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador." : " não é bom pagador."));


/* Desafio Sessão 4 */
// let corredor1= 10;
// let corredor2 = 11;
// let corredor3 = 9;

// if (corredor1 < corredor2 && corredor1 < corredor3){
//     console.log("Corredor 1 venceu a prova")
// }else if (corredor2 < corredor1 && corredor2 < corredor3){
//     console.log("Corredor 2 venceu a prova")
// }else{
//     console.log("Corredor 3 venceu a prova")
// }

/* Contador de valor de empréstimo em 3 opções de financiamento */
// for (let cont = 0; cont < 3; cont ++){
//     valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "));
//     numAnos = parseInt(prompt("Digite a quantidade de anos: "));
//     juros = valorEmprestimo * taxaDeJuros * numAnos;
//     montante = valorEmprestimo + juros;
//     console.log(montante);
// }

/* Contador de valor de empréstimo com múltiplas opções de financiamento */
// valorEmprestimo = 1;
// while(valorEmprestimo != 0){
//     valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "));
//     numAnos = parseInt(prompt("Digite a quantidade de anos: "));
//     juros = valorEmprestimo * taxaDeJuros * numAnos;
//     montante = valorEmprestimo + juros;
//     console.log(montante)
// }

/* Contador de valor de empréstimo com DO WHILE opções de financiamento */

// do{
//     valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "));
//     numAnos = parseInt(prompt("Digite a quantidade de anos: "));
//     juros = valorEmprestimo * taxaDeJuros * numAnos;
//     montante = valorEmprestimo + juros;
//     console.log(montante)
// }while(valorEmprestimo != 0)


/* Aprendendo o Break*/
/* Roda infinitamente até que o match acontece, ai ele para */
// while(true){
//     valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "));
//     if(valorEmprestimo === 0){
//         break;
//     }
//     numAnos = parseInt(prompt("Digite a quantidade de anos: "));
//     juros = valorEmprestimo * taxaDeJuros * numAnos;
//     montante = valorEmprestimo + juros;
//     console.log(montante)
// }

    /* CONTINUE */
// for(let cont1 =0 ; cont1 < 10; cont1++){
//     if (cont1 % 2 != 0){
//         continue;
//     }
//     console.log(cont1)
// }

/* Desafio Sessão 5 */
/* Printar o preço de 1 a 50 unidades de um item que custa 1.99 */
// console.log("LOJA QUASE 2 - PREÇOS")
// for(let item1 = 1; item1 <= 50; item1++){
//     valor = 1.99
//     // console.log(item1 + "- R$ " + (item1 * valor))
//     console.log(`${item1} - R$ ${item1 * 1.99}`);
// }

/* Desafio Sessão 5 - 2 */
/* Receber uma lista de temperaturas e tirar a média. Para quando for 0 */
// let temp;
// let somaTemp = 0;
// let contador = 0;
// while(true){
//     temp = parseInt(prompt("Digite a temperatura: "));
//     if (temp === 0){
//         break;
//     }
//     somaTemp += temp;
//     contador += 1;
// }
// console.log(`A média de temperatura é: ${somaTemp/contador}`);

/* Função apra cadastrar o cliente */
// let nome;
// let sobrenome;
// let idade;
// let valorEmprestimo;
// let taxaDeJuros;
// let numAnos;
// let ehBomPagador;

// function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, 
//     numAnosCliente, ehBomPagadorCliente ){
//     nome = nomeCliente;
//     sobrenome = sobrenomeCliente;
//     idade = idadeCliente;
//     valorEmprestimo = valorEmprestimoCliente;
//     numAnos = numAnosCliente;
//     ehBomPagador = ehBomPagadorCliente;
//     taxaDeJuros = defineTaxa(idadeCliente); //chama a função defineTaxa criada abaixo
// }

// function defineTaxa(idadeCliente){
//     if(idadeCliente >= 18 && idadeCliente <= 25){
//         return 0.09;
//     }else if(idadeCliente >= 26 && idadeCliente <= 35){
//         return 0.08;
//     }else if(idadeCliente >= 36 && idadeCliente <= 50){
//         return 0.07;
//     }else{
//         return 0.06;
//     }
// }

// cadastraCliente("Manuel","Silva",24,150000,2,true)
// console.log(nome);
// console.log(idade);
// console.log(sobrenome);
// console.log(taxaDeJuros);

// cadastraCliente("Edval","Neto",56,150000,9,false)
// console.log(nome);
// console.log(idade);
// console.log(sobrenome);
// console.log(taxaDeJuros);


// const media = function calculaMedia(num1,num2,num3){
//     let total = ((num1 + num2 + num3) / 3);
//     return total
// }
// console.log(media(10,20,30))

// /* Função anônima, pois retiramos o nome dela */
// const media = function (num1,num2,num3){
//     let total = ((num1 + num2 + num3) / 3);
//     return total
// }
// console.log(media(10,20,30))

// /* Expressão da Função */
// const media = (num1,num2,num3) => {
//     let total = ((num1 + num2 + num3) /3 );
//     return total;
// }
// console.log(media(10,20,30))

/*Arrow function simplicada */
// const areaQuadrado = lado => lado * lado
// console.log(areaQuadrado(8));


/* Desafio - Funções */
/* Faça um programa que faça 5 perguntas para uma pessoa sobre crime 
e exiba a classificação do interrogado no console do browser */


// function interrogatorio(){
//     let cont = 0;
//     perg1 = prompt("Telefonou para a vítima?");
//     perg2 = prompt("Esteve no local do crime?");
//     perg3 = prompt("Mora perto da vítima?");
//     perg4 = prompt("Devia para a vítima?");
//     perg5 = prompt("Já trabalhou com a vítima?");

//     if (perg1 === 'Sim' || perg1 === 'sim'){
//         cont += 1
//     }
//     if (perg2 === 'Sim' || perg2 === 'sim'){
//         cont += 1;
//     }
//     if (perg3 === 'Sim'|| perg3 === 'sim'){
//         cont += 1;
//     }
//     if (perg4 === 'Sim'|| perg4 === 'sim'){
//         cont += 1;
//     }
//     if (perg5 === 'Sim'|| perg5 === 'sim'){
//         cont += 1;
//     }    
//     return cont
// }

// function classifica(cont){
//     if (cont === 5){
//         console.log("Assassino");
//     }else if (cont ===3 || cont === 4){
//         console.log("Cúmplice");
//     }else if (cont === 2){
//         console.log("Suspeita");
//     }else {
//         console.log("Inocente")
//     }
// }

    
// classifica(interrogatorio());

/* Seção 7 */
/* Array */
/* Função apra cadastrar o cliente */
// let nome;
// let sobrenome;
// let idade;
// let valorEmprestimo;
// let taxaDeJuros;
// let numAnos;
// let ehBomPagador;
// let avalistas;

// function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, 
//     numAnosCliente, ehBomPagadorCliente = false,  avalistasCliente){
//     nome = nomeCliente;
//     sobrenome = sobrenomeCliente;
//     idade = idadeCliente;
//     valorEmprestimo = valorEmprestimoCliente;
//     numAnos = numAnosCliente;
//     ehBomPagador = ehBomPagadorCliente;
//     taxaDeJuros = defineTaxa(idadeCliente); //chama a função defineTaxa criada abaixo
//     avalistas = avalistasCliente;
// }

// function defineTaxa(idadeCliente){
//     if(idadeCliente >= 18 && idadeCliente <= 25){
//         return 0.09;
//     }else if(idadeCliente >= 26 && idadeCliente <= 35){
//         return 0.08;
//     }else if(idadeCliente >= 36 && idadeCliente <= 50){
//         return 0.07;
//     }else{
//         return 0.06;
//     }
// }

// cadastraCliente("Manuel","Silva",24,150000,2,true, ["José","Rafael","Bruno"])


//     /* Adicionar avalistas */

// function adicionarAvalista(avalista){
//     avalistas.push(avalista);
// }

//     /* Remover avalistas fim da lista */
// function removeAvalista(){
//     avalistas.pop();
// }
//     /* Editar avalistas */
// function editaAvalista(nomeAvalista, indice){
//     avalistas[indice] = nomeAvalista;


// }
//     /* Ordernas avalistas */
// function ordenarAvalista(){
//     return avalistas.sort();
// }

// function exibeAvalistas(){
//     avalistas.forEach((avalista,indice) => {
//     // console.log("Avalista " + indice + ": " + avalista);
//     console.log(`O ${indice + 1}º avalista é ${avalista}`);
    
// })};

// adicionarAvalista("Andrew");
// adicionarAvalista("Joao");
// adicionarAvalista("Marcos");
// console.log(avalistas)
// removeAvalista();
// removeAvalista();
// console.log(avalistas);
// editaAvalista("Manuel Silva", 0);
// // console.log(avalistas[0]);
// // console.log(ordenarAvalista());
// console.log(exibeAvalistas())


/* Desafio Arrays */
/* Usuário insere a nota dos alunos e o resultado é quantos foram aprovados */

// alunos = []
// matricula = 1
// aprovados = 0
// reprovados = 0
// while(true){    
//     nota = parseFloat(prompt("Informe a nota do aluno: "));
//     if (nota === 0){
//         break
//     }else{
//         if (nota >= 7){
//             alunos.push([matricula, nota]);
//             aprovados += 1;
//         }else{
//             alunos.push([matricula, nota]);
//             reprovados += 1;
//         }
//     }
//     matricula += 1;
// }
// console.log(alunos)
// console.log(`Aprovados ${aprovados}`)
// console.log(`Reprovados ${reprovados}`)

// Seção 8 - Objetos - Sistema de cadastro de clientes

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, 
    numAnosCliente, ehBomPagadorCliente = false,  avalistasCliente){
    cliente = { 
        nome: nomeCliente,
        sobrenome: sobrenomeCliente,
        idade: idadeCliente,
        emprestimo: {
            valorEmprestimo: valorEmprestimoCliente,
            numAnos: numAnosCliente,
            ehBomPagador: ehBomPagadorCliente,
            taxaDeJuros: defineTaxa(idadeCliente), //chama a função defineTaxa criada abaixo
            avalistas: avalistasCliente,
        },
        adicionaAvalista: function(avalista){
            this.emprestimo.avalistas.push(avalista);
        },
        removeAvalista: function(){
            this.emprestimo.avalistas.pop();
        },
        editaAvalista: function(nomeAvalista, indice){
            this.emprestimo.avalistas[indice] = nomeAvalista;
        },
        ordenaAvalista: function(){
            this.emprestimo.avalistas.sort()
        },
        exibeAvalistas: function(){
            this.emprestimo.avalistas.forEach((avalista, indice) => {
                console.log(`O ${indice + 1}º avalista é ${avalista}`);
            });
        }
    }

    return cliente;
}

function defineTaxa(idadeCliente){
    if(idadeCliente >= 18 && idadeCliente <= 25){
        return 0.09;
    }else if(idadeCliente >= 26 && idadeCliente <= 35){
        return 0.08;
    }else if(idadeCliente >= 36 && idadeCliente <= 50){
        return 0.07;
    }else{
        return 0.06;
    }
}

const cliente1 = cadastraCliente("Edval", "Silveira",56, 150000, 9, true, ["Manuel","Raphael","Bruno"]);
// cliente1.adicionaAvalista("José");
// cliente1.adicionaAvalista("Marcos");
// cliente1.removeAvalista(); // tira o Marcos
// cliente1.editaAvalista("Manuel Silva",0);
// cliente1.ordenaAvalista();
// cliente1.exibeAvalistas();

// const chaves = Object.keys(cliente1);
// const valores = Object.values(cliente1);
// const entrada = Object.entries(cliente1);
// console.log(chaves)
// console.log(valores);
// console.log(entrada);

function credenciaisInvalidas(mensagem){
    this.nome = "Credenciais Inválidas";
    this.mensagem = mensagem;
}

function adicionaInfoLogin(cliente, email, senha){
    
    if (email.indexOf("@") !== -1 && senha.length > 5){
        cliente.login = {
            email: email,
            senha: senha
        }
        return cliente;
    }else{
        throw new credenciaisInvalidas("Os dados são inválidos");
    }
}

// try{console.log(adicionaInfoLogin(cliente1, "edval@gmail.com","ediv1242"))
// }catch(error){
//     console.log(error);
//     console.log("Nome", error.nome);
//     console.log("Mensagem", error.mensagem);
// }finally{
//     console.log("Deseja realizar uma nova operação?")
// }
// console.log(adicionaInfoLogin(cliente1, "edval#gmail.com","eas2"))


/* Desafio - Troca senha por *** para não deixar ela visível */

// function escondeSenha(senha){
//     let senhaVazia = "";
//     for(let i = 0; i < senha.length; i++){
//         senhaVazia += "*";
//     }
//     return senhaVazia
// }

// const usuario1 = {
//     nome:"Vinicius",
//     email:"Vini@etc.com",
//     senha:"senhaTeste"
// }

// usuario1.senha = escondeSenha(usuario1.senha)
// console.log(usuario1)
    /*Exemplo 2*/

// try{
//     let x = y + 10;
//     console.log(x);
// }catch(erro){
//     if (erro instanceof TypeError){
//         console.log("Type Error")
//     }else if (erro instanceof ReferenceError){
//         console.log("Reference Error")
//     }
// }


    