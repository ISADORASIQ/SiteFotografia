
					window.onload = function () {
						var xhr = new XMLHttpRequest();
						xhr.open('GET', 'carrossel.php', true);
						xhr.onreadystatechange = function () {
							if (xhr.readyState == 4 && xhr.status == 200) {
								var imagens = JSON.parse(xhr.responseText);
								exibirCarrossel(imagens);
							}
						};
						xhr.send();
					};
			
					function exibirCarrossel(imagens) {
						var carrosselDiv = document.querySelector('.carousel-inner');
			
						imagens.forEach(function (imagem, index) {
							var carrosselItem = document.createElement('div');
							carrosselItem.classList.add('carousel-item');
							if (index === 0) {
								carrosselItem.classList.add('active');
							}
			
							var img = document.createElement('img');
							img.src = imagem.url;
							img.alt = imagem.descricao;
							img.classList.add('d-block', 'w-100');
			
							var descricao = document.createElement('div');
							descricao.classList.add('carousel-caption', 'd-none', 'd-md-block');
							descricao.innerHTML = '<p>' + imagem.descricao + '</p>';
			
							carrosselItem.appendChild(img);
							carrosselItem.appendChild(descricao);
							carrosselDiv.appendChild(carrosselItem);
						});
					}