
function calcular(operacao) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado;

    if (operacao === "+") {
        resultado = n1 + n2;
    } else if (operacao === "/") {
        if (n2 === 0) {
            document.getElementById("resultado").textContent =
                "Não é possível dividir por zero!";
            return;
        }
        resultado = n1 / n2;
    }

    document.getElementById("resultado").textContent =
        "Resultado: " + resultado;
}
