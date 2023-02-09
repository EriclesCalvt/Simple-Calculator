function somar(){
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var res = document.getElementById('res')
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2;
    res.innerHTML = `A Soma Entre ${n1} e ${n2} é igual a = ${s}`
}

function Subtrair(){
    var n1 = document.getElementById('numero1');
    var n2 = document.getElementById('numero2');
    var resultado = document.getElementById('resu')
    var num1 = Number(n1.value);
    var num2 = Number(n2.value);
    var menos = num1 - num2;
    resultado.innerHTML = `A Diferença Entre ${num1} e ${num2} é igual a = ${menos}`
}