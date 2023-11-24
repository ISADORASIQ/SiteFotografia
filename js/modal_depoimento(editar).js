$(document).ready(function() {

    $("#buttonSave").click(function() {
        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var cargo = $("#cargo").val();
        var depoimento = $("#depoimento").val();

        $.ajax({
            type: "POST",
            url: "./php/salvar_dados_depoimento.php",
            data: {
                nome: nome,
                email: email,
                telefone: telefone,
                depoimento: depoimento,
                cargo: cargo,
            },
            success: function(response) {
                console.log('Dados salvos com sucesso:', response);
                // Fecha o modal após salvar os dados
                $("#myModal").modal("hide");
            },
            error: function(error) {
                console.error('Erro ao salvar dados:', error);
            }
        });
    });

    function carregarDados() {
        $.ajax({
            type: "GET",
            url: "./php/buscar_dados_depoimento.php",
            contentType: "application/json", // Configurar o tipo de conteúdo para JSON
            dataType: "json", // Espera uma resposta JSON do servidor
            success: function(response) {
                if (response.success) {
                    exibirDados(response.data);
                } else {
                    console.error('Erro ao obter dados:', response.data);
                }
            },
            error: function(error) {
                console.error('Erro ao obter dados:', error);
            }
        });
    };
    
    function exibirDados(dados) {
        var testimonialSlider = document.getElementById('add_depoiments');

        dados.forEach(function(item) {
            var novoDepoimento = document.createElement('div');
            novoDepoimento.className = 'item';

            // Adicionar o novo depoimento ao slider
            testimonialSlider.appendChild(novoDepoimento);
            var initial = '<hr class="rounded"><div class="row justify-content-center"><div class="col-lg-8 mx-auto"><div class="testimonial-block text-center"><b>Depoimento:</b> <p>&ldquo;' + item['depoimento'];
            var mid = '&rdquo;</p>';
            var end = '<div class="font-weight-bold">Nome: ' + item['nome'] + '</div><span class="position d-block mb-3">Cargo: ' + item['cargo'] + '</span></div></div></div>';
            var item_add = initial + mid + end;
            novoDepoimento.innerHTML = item_add;
            testimonialSlider.appendChild(novoDepoimento);
        });
    }

    carregarDados();
});