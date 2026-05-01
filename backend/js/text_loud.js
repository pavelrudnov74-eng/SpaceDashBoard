// Ждем загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
    // Находим все блоки, куда нужно вставить текст
    const blocks = document.querySelectorAll('.content');

    blocks.forEach(block => {
        const filePath = block.getAttribute('data-file');

        // Загружаем файл
        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error('Файл не найден');
                return response.text();
            })
            .then(text => {
                // Вставляем текст в блок
                block.innerHTML = text; 
            })
            .catch(error => {
                console.error('Ошибка загрузки:', error);
                block.innerHTML = "Не удалось загрузить текст.";
            });
    });
});