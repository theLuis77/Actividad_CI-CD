let numero_Inicio =2, Numero_multiplicado=4

for(numero_Inicio, Numero_multiplicado; numero_Inicio <=11; numero_Inicio++){
    console.log("Tabla del " + numero_Inicio);
    for(Numero_multiplicado = 1; Numero_multiplicado <= 10; Numero_multiplicado++){
        console.log(numero_Inicio + " x " + Numero_multiplicado + " = " + (numero_Inicio * Numero_multiplicado));
    }
    console.log("\n");
}
console.log("Fin de las tablas de multiplicar");