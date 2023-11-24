<?php
include 'conexao.php';

$query = "SELECT * FROM imagens";
$resultado = $conexao->query($query);

$imagens = array();

while ($linha = $resultado->fetch_assoc()) {
    $imagens[] = $linha;
}

echo json_encode($imagens);

$conexao->close();
?>