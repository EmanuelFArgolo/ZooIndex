//carrossel
document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var slides = document.querySelectorAll('#slider img');
    var interval = 5000; // Intervalo de tempo em milissegundos (3 segundos)

    setInterval(function () {
        slides[currentIndex].style.display = 'none'; // Oculta a imagem atual
        currentIndex = (currentIndex + 1) % slides.length; // Avança para a próxima imagem
        slides[currentIndex].style.display = 'block'; // Exibe a próxima imagem
    }, interval);
});

//botoes

document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var slides = document.querySelectorAll('#slider img');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var intervalId; // Variável para armazenar o ID do intervalo

    function showSlide(index) {
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    }

    function startSlider() {
        intervalId = setInterval(function () {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 3000); // Intervalo de 3 segundos
    }

    function resetSlider() {
        clearInterval(intervalId); // Limpa o intervalo existente
        startSlider(); // Inicia um novo intervalo
    }

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

});



