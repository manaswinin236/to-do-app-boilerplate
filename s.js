function click() {
    listOfActivities.push(input.value);
    console.log(listOfActivities);
    input.value = "";
    showList();

}
function showList() {
    todolist.innerHTML = " ";

    listOfActivities.forEach(function (n, i)) {
        todolist.innerHTML +=
        "<li>" +
        n +
        "<a onclick= 'edit"
    }
}