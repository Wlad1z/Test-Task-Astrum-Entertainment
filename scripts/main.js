const tbody = document.getElementsByTagName('tbody')[0];
let data = [
    {
        img: "watch",
        name: "Игровое время",
        freeSevers: "-",
        donatSevers: "30 дней",
    },
    {
        img: "box",
        name: "Запечатанный набор инструментов",
        freeSevers: "1",
        donatSevers: "1",
    },
    {
        img: "run",
        name: "Хрупкая чистая руна 10-й ступени",
        freeSevers: "1",
        donatSevers: "-",
    },
    {
        img: "symbol",
        name: "Большой символ изобилия творца",
        freeSevers: "10",
        donatSevers: "-",
    },
    {
        img: "mana",
        name: "Мана-батарея",
        freeSevers: "-",
        donatSevers: "20",
    },
    {
        img: "modul",
        name: "Модуль памяти",
        freeSevers: "-",
        donatSevers: "10",
    },
    {
        img: "vito",
        name: "Помощник Вито ",
        freeSevers: "1",
        donatSevers: "1",
    }
]

data.forEach(target => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><img src="static/img/section2/${target.img}.png" alt=""></td><td class="two-row">${target.name}</td><td class="center">${target.freeSevers}</td><td class="center">${target.donatSevers}</td>`
    tbody.appendChild(tr);
});