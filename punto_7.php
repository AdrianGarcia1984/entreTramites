<?php
function esPrimo($num) {
        if ($num <= 1) {
        return false;
    }    
   
    for ($i = 2; $i * $i <= $num; $i++) {
        if ($num % $i == 0) {
            return false;
        }
    }    
    return true;
}

function obtenerPrimos($n) {
    $primos = [];
    $num = 2; 
    
    while (count($primos) < $n) {
        if (esPrimo($num)) {
            $primos[] = $num;
        }
        $num++;
    }
    
    return $primos;
}
 

$n = readline("Ingresa el numero: ");
$resultado = obtenerPrimos($n);

echo "Los primeros $n números primos son: ";
echo "[" . implode(', ', $resultado) . "]";
?>