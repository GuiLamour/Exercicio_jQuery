$(document).ready(function () {
    $("form").submit(function (event) {
    event.preventDefault();
    const tarefa = $("#tarefa").val().trim();

    if (tarefa !== "") {
    const novaTarefa = $("<li>").text(tarefa);

    novaTarefa.click(function () {
    $(this).toggleClass("linhas");
    });

    $("ul").append(novaTarefa);
    $("#tarefa").val("");
    }
    });
});