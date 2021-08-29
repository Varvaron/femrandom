let books = ['Тове Дитлевсен - Копенгагская трилогия', 
'Сильвия Плат - Под стеклянным колпаком', 
'Элисон Бекдел - Весёлый дом',
'Анна Гавальда - 35 кило надежды',
'Эмили Бронте - Грозовой перевал',
'Этель Лилиан Войнич - Овод',
'Анна Ахматова - Реквием',
'Сьюзен Коллинз - Голодные игры',
'Астрид Линдгрен - Мио, мой Мио!',
'Мария Парр - Вафельное сердце',
'Диана Уинн Джонс - Ходячий замок',
'Анника Тор - Правда или последствия',
'Вирджиниа Вульф - Своя комната',
'Хербьерг Вассму - Сто лет',
'Сильвана де Мари - Последний эльф',
'Анджелла Нанетти - Мой дедушка был вишней',
'Мэри Шелли - Франкенштейн',
'Эльфрида Эллинек - Любовницы',
'Джоанн Харрис - Шоколад',
'Колин Маккалоу - Поющие в терновнике',
'Софи Кинселла - Помнишь меня?',
'Маргарет Митчел - Унесенные ветром',
'Гарриет Бичер-Стоу - Хижина Дяди Тома',
'Шарлотта Бронте - Джейн Эйр',
'Маргарет Эдвуд - Рассказ Служанки',
'Герта Мюллер - Сердце-зверь',
'Джейн Остин - Гордость и предубеждение',
];

let getRandomElement = function(arr) {
    let randIndex = Math.floor(Math.random() * arr.length); 
    return arr[randIndex];
}

let button = document.querySelector('.button');
let randBook = document.querySelector('.output');

button.onclick = function() {
    randBook.textContent = getRandomElement(books);
}
