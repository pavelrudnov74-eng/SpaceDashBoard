async function loadSpaceXLaunches() {
    // API SpaceX: получаем список всех предстоящих запусков
    const url = 'https://api.spacexdata.com/v4/launches/upcoming';

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Ошибка при ответе сервера');
        }

        const launches = await response.json();
        
        // Находим твои кнопки
        const buttons = document.querySelectorAll('.button-container button');

        // Проходим по первым трем запускам
        for (let i = 0; i < 3; i++) {
            if (buttons[i] && launches[i]) {
                const launch = launches[i];
                
                // 1. Название миссии
                const missionName = launch.name;

                // 2. Красивая дата
                const date = new Date(launch.date_utc).toLocaleString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    hour: '2-digit',
                    minute: '2-digit'
                });

                // 3. Номер полета (вместо места, так как место в SpaceX API требует отдельного запроса)
                const flightNumber = "Полет №" + launch.flight_number;

                // Выводим в кнопку
                buttons[i].innerHTML = `
                    <span style="font-size: 1.5em; font-weight: bold;">${missionName}</span>

                    <span style="font-size: 1.1em;">📅 ${date}</span>

                    <span style="font-size: 1.0em; opacity: 0.7;">🚀 ${flightNumber}</span>
                `;
            }
        }
    } catch (error) {
        console.error('Ошибка:', error);
        // Если что-то пошло не так, подпишем кнопки
        const buttons = document.querySelectorAll('.button-container button');
        buttons.forEach(btn => btn.innerText = "Данные SpaceX недоступны");
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', loadSpaceXLaunches);