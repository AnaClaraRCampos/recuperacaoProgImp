// 12. Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para
// Km/h. Para tal, multiplique o valor em m/s por 3,6.


velocidade = 20; // Usuário insere a velocidade em m/s

function conversorVelocidade(){
    return velocidade * 3.6;
}

console.log(conversorVelocidade());

// 24. Escreva um programa que receba três números e mostre o maior entre eles.

function maiorNum(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return `O ${num1} é o maior número.`;

    }else if(num2>num1 && num2>num3){
        return `O ${num2} é o maior número.`;

    }else if(num3>num1 && num3>num2){
        return `O ${num3} é o maior número.`;
    }
    
}

console.log(maiorNum(5,9,2));
console.log(maiorNum(7,4,6));
console.log(maiorNum(3,7,10));


// 35. Escreva um programa que receba um número inteiro de 1 a 7 e informe o dia da semana correspondente, sendo domingo o dia de número 1. Se o número não corresponder a um dia da semana, mostre uma mensagem de erro.


function diaSemana(num){
    if(num==1){
        return `Domingo`;

    }else if(num==2){
        return `Segunda`;

    }else if(num==3){
        return `Terça`;

    }else if(num==4){
        return `Quarta`;

    }else if(num==5){
        return `Quinta`;

    }else if(num==6){
        return `Sexta`;

    }else if(num==7){
        return `Sábado`;

    } else if (num>7){
        return `Nenhum dia correspodente`
    }
}

console.log(diaSemana(4));
console.log(diaSemana(8));

