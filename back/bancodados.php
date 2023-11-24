<?php
$host = 'seu_host';
$usuario = 'seu_usuario';
$senha = 'sua_senha';
$banco = 'seu_banco';

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die('Erro na conexão com o banco de dados: ' . $conexao->connect_error);
}
?>