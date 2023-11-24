<?php
// Conectar ao banco de dados MariaDB (substitua os valores conforme necessário)
$conexao = new mysqli("localhost", "root", "", "banco_dados");

// Verificar a conexão
if ($conexao->connect_error) {
    die("Conexão falhou: " . $conexao->connect_error);
}

// Coletar dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$depoimento = $_POST['depoimento'];
$cargo = $_POST['cargo'];

// Inserir dados na tabela do banco de dados (substitua os nomes de tabela e coluna conforme necessário)
$sql = "INSERT INTO depoimento (nome, email, telefone, depoimento, cargo) 
        VALUES ('$nome', '$email', '$telefone', '$depoimento', '$cargo')";

if ($conexao->query($sql) === TRUE) {
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false, "error" => $conexao->error));
}

// Fechar a conexão
$conexao->close();
?>