var nCaballos = ["Suertudo", "Bucéfalo", "Eclipse", "Caballo de Troya", "NeptJupiter", "Frambuesa", "Rosa Blanca", "Crisálida", "Leila", "Espartaco"];

var todo=[];

function preparar() {
    var j1 = document.getElementById("cab").value;
    document.getElementById("CB1")
        .innerHTML = j1;
    document.getElementById("GANADOR1")
        .innerHTML = j1;
    document.getElementById("GANADOR2")
        .innerHTML = j1;
    var j2 = nCaballos[Math.round(Math.random() * 9)];
    document.getElementById("CB2")
        .innerHTML = j2;

        todo.push(j1,j2);
    document.getElementById("Datoscaballos").style.display = "none";
    document.getElementById("Pista").style.display = "block";
    document.getElementById("juego").style.display = "block";
    document.getElementById("juego1").style.display = "block";

}
var cont = 0;
var ac = 0;
var cont1 = 0;
var ac1 = 0;
var GC1 = false;
var GC2 = false;
var c1 = document.getElementById("CaB1");
var nc1 = document.getElementById("CB1");
var c2 = document.getElementById("CaB2");
var nc2 = document.getElementById("CB2");
var tp = document.getElementById("TJ");
var tnpc = document.getElementById("TNPC");
var turnos = 0;
var uno = 0;
var dos = 0;
var tres = 0;
var cuatro = 0;
var cinco = 0;
var seis = 0;
var turnos1 = 0;
var uno1 = 0;
var dos1 = 0;
var tres1 = 0;
var cuatro1 = 0;
var cinco1 = 0;
var seis1 = 0;
function numToMove() {
    return (Math.round(Math.random() * 5) + 1);
}

function mover1() {
    if (GC1 == true) {
        document.getElementById("Pista").style.display = "none";
        document.getElementById("juego").style.display = "none";
        document.getElementById("juego1").style.display = "none";
        document.getElementById("winner").style.display = "block";
    } else if (GC2 == true) {
        document.getElementById("Pista").style.display = "none";
        document.getElementById("juego").style.display = "none";
        document.getElementById("juego1").style.display = "none";
        document.getElementById("losser").style.display = "block";
    } else {
    turnos1++;
    var m = numToMove()
    var n = numToMove();
    console.log(m + n);
    var sum1 = m + n;
    var dj1 = document.getElementById("DNPC1");
    dj1.src = "dados/dado (1).gif";
    var dj2 = document.getElementById("DNPC2");
    dj2.src = "dados/dado (1).gif";
    setTimeout(function () {
        switch (m) {
            case 1:
                dj1.src = "dados/1.png";
                uno1++;
                break;
            case 2:
                dj1.src = "dados/2.png";
                dos1++;
                break;
            case 3:
                dj1.src = "dados/3.png";
                tres1++;
                break;
            case 4:
                dj1.src = "dados/4.png";
                cuatro1++;
                break;
            case 5:
                dj1.src = "dados/5.png";
                cinco1++;
                break;
            case 6:
                dj1.src = "dados/6.png";
                seis1++;
                break;
        }
        switch (n) {
            case 1:
                dj2.src = "dados/1.png";
                uno1++;
                break;
            case 2:
                dj2.src = "dados/2.png";
                dos1++;
                break;
            case 3:
                dj2.src = "dados/3.png";
                tres1++;
                break;
            case 4:
                dj2.src = "dados/4.png";
                cuatro1++;
                break;
            case 5:
                dj2.src = "dados/5.png";
                cinco1++
                break;
            case 6:
                dj2.src = "dados/6.png";
                seis1++;
                break;
        }
    }, 1000);
    
    var iden1 = setInterval(avanzar1, 50, sum1)
    function avanzar1(y) {
        if (cont1 == y) {
            clearInterval(iden1);
            cont1 = 0;
        } else {
            cont1++;
            ac1++;
            c2.style.left = ac1 + "%";
            nc2.style.left = ac1 + "%";
            tnpc.innerHTML=("&emsp;"+todo[1]+" Ha recorrido el "+ac1+" %, de la pista.");
            if (ac1 > 85) {
                GC2 = true;
                GC1 = false;
            }
        }
    }
    document.getElementById("mover").disabled = false;
    
   // alert("TU TURNO");
}

}

function mover() {
    if (GC1 == true) {
        document.getElementById("Pista").style.display = "none";
        document.getElementById("juego").style.display = "none";
        document.getElementById("juego1").style.display = "none";
        document.getElementById("winner").style.display = "block";
    } else if (GC2 == true) {
        document.getElementById("Pista").style.display = "none";
        document.getElementById("juego").style.display = "none";
        document.getElementById("juego1").style.display = "none";
        document.getElementById("losser").style.display = "block";
    } else {
        turnos++;
        var j = numToMove()
        var k = numToMove();
        console.log(j + k);
        var sum = j + k;
        var d1 = document.getElementById("DJ1");
        d1.src = "dados/dado (1).gif";
        var d2 = document.getElementById("DJ2");
        d2.src = "dados/dado (1).gif";
        setTimeout(function () {
            switch (j) {
                case 1:
                    d1.src = "dados/1.png";
                    uno++;
                    break;
                case 2:
                    d1.src = "dados/2.png";
                    dos++;
                    break;
                case 3:
                    d1.src = "dados/3.png";
                    tres++
                    break;
                case 4:
                    d1.src = "dados/4.png";
                    cuatro++;
                    break;
                case 5:
                    d1.src = "dados/5.png";
                    cinco++;
                    break;
                case 6:
                    d1.src = "dados/6.png";
                    seis++;
                    break;
            }
            switch (k) {
                case 1:
                    d2.src = "dados/1.png";
                    uno++;
                    break;
                case 2:
                    d2.src = "dados/2.png";
                    dos++;
                    break;
                case 3:
                    d2.src = "dados/3.png";
                    tres++;
                    break;
                case 4:
                    d2.src = "dados/4.png";
                    cuatro++;
                    break;
                case 5:
                    d2.src = "dados/5.png";
                    cinco++;
                    break;
                case 6:
                    d2.src = "dados/6.png";
                    seis++;
                    break;
            }
        }, 1000);
        var id = setInterval(avanzar, 50, sum)
        function avanzar(x) {
            if (cont == x) {
                clearInterval(id);
                cont = 0;
            } else {
                cont++;
                ac++;
                c1.style.left = ac + "%";
                nc1.style.left = ac + "%";
                tp.innerHTML=("&emsp;"+todo[0]+" Ha recorrido el "+ac+" %, de la pista.");
                if (ac > 85) {
                    GC1 = true;
                    GC2 = false;
                }
            }
        }
        document.getElementById("mover").disabled = true;
        setTimeout(mover1, 2000);
    } 
}
function cerrar() {
    window.close();
}
function otraVez() {
    document.getElementById("mover").disabled = false;
    document.getElementById("Datoscaballos").style.display = "block";
    document.getElementById("tablaEstadistica").style.display = "none";
    document.getElementById("winner").style.display = "none";
    document.getElementById("losser").style.display = "none";
    document.getElementById("cab").value="";
    document.getElementById("cab").focus();
    var d1 = document.getElementById("DJ1");
        d1.src = "dados/dado (1).gif";
        var d2 = document.getElementById("DJ2");
        d2.src = "dados/dado (1).gif";
        var dj1 = document.getElementById("DNPC1");
        dj1.src = "dados/dado (1).gif";
        var dj2 = document.getElementById("DNPC2");
        dj2.src = "dados/dado (1).gif";
    c1.style.left = 0;
    c2.style.left = 0;
    cont = 0
    cont1 = 0;
    ac = 0;
    ac1 = 0;
    turnos = 0;
    turnos1 = 0;
    GC1 = false;
    GC2 = false;
    uno = 0;
    dos = 0;
    tres = 0;
    cuatro = 0;
    cinco = 0;
    seis = 0;
    uno1 = 0;
    dos1 = 0;
    tres1 = 0;
    cuatro1 = 0;
    cinco1 = 0;
    seis1 = 0;
    todo=[];
}
function estadisticas(){
    document.getElementById("tablaEstadistica").style.display = "block";
    document.getElementById("winner").style.display = "none";
    document.getElementById("losser").style.display = "none";
    var tb=document.getElementById("tb_est");
    var tr=document.createElement("tr");
    var td=document.createElement("td");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    var td6=document.createElement("td");
    var th=document.createElement("th");
    th.appendChild(document.createTextNode(todo[0]));
    td.appendChild(document.createTextNode(turnos));
    td1.appendChild(document.createTextNode(uno));
    td2.appendChild(document.createTextNode(dos));
    td3.appendChild(document.createTextNode(tres));
    td4.appendChild(document.createTextNode(cuatro));
    td5.appendChild(document.createTextNode(cinco));
    td6.appendChild(document.createTextNode(seis));
    tr.appendChild(th);
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tb.appendChild(tr);
    var tr1=document.createElement("tr");
    var td10=document.createElement("td");
    var td11=document.createElement("td");
    var td12=document.createElement("td");
    var td13=document.createElement("td");
    var td14=document.createElement("td");
    var td15=document.createElement("td");
    var td16=document.createElement("td");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(todo[1]));
    td10.appendChild(document.createTextNode(turnos1));
    td11.appendChild(document.createTextNode(uno1));
    td12.appendChild(document.createTextNode(dos1));
    td13.appendChild(document.createTextNode(tres1));
    td14.appendChild(document.createTextNode(cuatro1));
    td15.appendChild(document.createTextNode(cinco1));
    td16.appendChild(document.createTextNode(seis1));
    tr1.appendChild(th1);
    tr1.appendChild(td10);
    tr1.appendChild(td11);
    tr1.appendChild(td12);
    tr1.appendChild(td13);
    tr1.appendChild(td14);
    tr1.appendChild(td15);
    tr1.appendChild(td16);
tb.appendChild(tr1);

}