function verifica() {
    var full = document.getElementById("entrada").value;
    full = full.replaceAll('-', '');
    full = full.replaceAll('.', '');
    
    var x = full.slice(0,9)
    var y = full.slice(9,11)

    x = Array.from(x);
    y = Array.from(y);

    var soma = 0;
    let n = [];

    for (let i = 0; i < x.length; i++) {
        soma = soma + (x[i] * (10-i));
    }

    if ((11 - (soma % 11)) > 9) {
        n[0] = 0
    }
    else {
        n[0] = 11 - (soma % 11)
    }

    x[9] = y[0]

    soma = 0;

    for (let i = 0; i < x.length; i++) {
        soma = soma + (x[i] * (11-i));
    }

    if ((11 - (soma % 11)) > 9) {
        n[1] = 0
    }
    else {
        n[1] = 11 - (soma % 11)
    }

    var valido = "O CPF é válido!"

    for (let i = 0; i < full.length; i++) {
        if(full.charAt(i) != full.charAt(0)) {
            var valido = "O CPF é válido!"
            break;
        }
        valido = "O CPF não é válido!"
    }

    if (full.length != 11) {
        valido = "O CPF não é válido!"
    }

    if (n[0] != y[0] || n[1] != y[1]) {
        valido = "O CPF não é válido!"
    }

    document.getElementById("resultado").innerHTML = valido;

}

function gerar() {
    var cpf = ''
    var soma = 0;

    for (let i = 0; i < 9; i++) {
        cpf = cpf.concat(Math.floor(Math.random() * 10));

    }

    x = Array.from(cpf);

    console.log(cpf)

    for (let i = 0; i < x.length; i++) {
        soma = soma + (x[i] * (10-i));
    }

    if ((11 - (soma % 11)) > 9) {
        cpf = cpf.concat(0);
    }
    else {
        cpf = cpf.concat(11 - (soma % 11));
    }

    x = Array.from(cpf);
    soma = 0;

    for (let i = 0; i < x.length; i++) {
        soma = soma + (x[i] * (11-i));
    }

    if ((11 - (soma % 11)) > 9) {
        cpf = cpf.concat(0);
    }
    else {
        cpf = cpf.concat(11 - (soma % 11));
    }

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    document.getElementById("gerado").innerHTML = cpf;

}

function card(bandeira) {
    const visa = [453226, 491656, 471634];
    const master = [512673, 819696, 521174];
    const elo = [651653, 509098, 650496];
    const bands = [visa, master, elo];

    var final = '';
    var soma = 0;

    final = final.concat(bands[bandeira][Math.floor(((Math.floor(Math.random() * 10))*3/10))]);

    for (let i = 0; i < 9; i++) {
        var num = Math.floor(Math.random() * 10);
        final = final.concat(num);
    }


    var x = Array.from(final)
    
    for (let i = 0; i < x.length; i++) {
        var temp = (x[i] * ((((i+1) % 2))+1));
        if (temp > 9) {
            soma = soma + temp - 9;
        }
        else {
            soma = soma + temp;
        }
    }



    if ((10 - (soma % 10)) == 10) {
        final = final.concat(0);
    }
    else {
        final = final.concat(10 - (soma % 10));
    }


    final = final.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")

    document.getElementById("card").innerHTML = final;

}