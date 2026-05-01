document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('playBtn');
    const audio = document.getElementById('myAudio');

    // Проверяем, существуют ли элементы на этой странице
    if (btn && audio) {
        btn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                btn.textContent = 'Пауза';
            } else {
                audio.pause();
                btn.textContent = 'Включить звук';
            }
        });
    } else {
        // Выводим подсказку в консоль, если забыли добавить ID в HTML
        console.warn("Элементы playBtn или myAudio не найдены на этой странице.");
    }
});