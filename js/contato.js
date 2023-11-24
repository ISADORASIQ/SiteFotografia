$(document).ready(function() {

    $("#buttonSave").click(function() {
        var nome = $("#nome").val();
        var email = $("#email").val();
        var mensagem = $("#mensagem").val();

        if (email.indexOf("@") !== -1){ 
            $.ajax({
                type: "POST",
                url: "./php/salvar_dados_contato.php",
                data: {
                    nome: nome,
                    email: email,
                    mensagem: mensagem,
                },
                success: function(response) {
                    console.log('Dados salvos com sucesso:', response);
                    // Fecha o modal após salvar os dados
                },
                error: function(error) {
                    console.error('Erro ao salvar dados:', error);
                }
            });
        }
    });
});