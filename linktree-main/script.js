/*creditos a gustavo pq nao tenho criatividade :3*/
const botaoTema = document.querySelector(".tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-noturno");

    if (document.body.classList.contains("modo-noturno")) {
        botaoTema.innerHTML = "☀️ Modo normal";
    } else {
        botaoTema.innerHTML = "🌙 Modo noturno";
    }
});
