//TODO conseguir resolver o problema de passar o número da mesa para o elemento li dentro da ul
const btn = document.getElementById("btn");
const inputOrder = document.getElementById("inputOrder");
const inputTable = document.getElementById("inputTable");
const list = document.querySelector(".list");
let allOrdersLister = [{
    order: inputOrder.value,
    table: inputTable.value
}];
//TODO IMPLEMENTARA ARRAY DE OBJETOS
btn.addEventListener("click", (event) => {

    addOrder();
    readOrder();

    event.preventDefault();
})

//Read order in ul
function readOrder() {

    list.innerHTML = "";
    allOrdersLister.forEach((item, index) => {
        
        let tableElement = document.createElement("h2");
        let orderElement = document.createElement("li");

        let tableText = document.createTextNode(item.table);
        let orderText = document.createTextNode(item.order);

        let deleteOrder = document.createElement("a");
        deleteOrder.setAttribute("href", "#");
        deleteOrder.classList("btnDelete");

        let deleteText = document.createTextNode("X");
        deleteOrder.appendChild(deleteText);

        let positionOrder = allOrdersLister.indexOf(allOrdersLister.order);
        deleteOrder.setAttribute("onclick", `deleteOrder(${positionOrder})`);

        tableElement.appendChild(tableText);
        orderElement.appendChild(orderText);
        orderElement.appendChild(tableElement);
        orderElement.appendChild(deleteOrder);
        allOrdersLister.appendChild(orderElement);

    });
};

//TODO IMPLEMENTAR REGEX NA VERIFICAÇÃO
//ADD order on list and error background in the input
function addOrder(){
    //Alert
    if (inputOrder.value.trim() === "" && inputTable.value.trim() === "") {
        let main = document.querySelector("main");
        let alertIcon = document.createElement("span");
        let alertTable = document.createElement("span");

        alertIcon.classList.add("alertIcon");
        alertTable.classList.add("alertIcon");

        let textAlert = document.createTextNode("⚠️Você não digitou o pedido!");
        let textTable = document.createTextNode("⚠️Você não digitou o número da mesa!");
        alertTable.appendChild(textTable);
        alertIcon.appendChild(textAlert);
        main.appendChild(alertIcon);
        main.appendChild(alertTable);

        if(main.childElementCount > 4 ){
            alertIcon.remove();
            alertTable.remove()
        }

        setTimeout(() => {
            alertIcon.remove();
            alertTable.remove()
        }, 2000);

        return false;
    } else {
        let newOrder =  inputOrder.value;
        let newTable = inputTable.value.trim();

        allOrdersLister.push(newTable);
        inputOrder.value = "";
        inputTable.value = "";

        readOrder();
    }
};

function deleteOrder(position) {
    allOrdersLister.splice(position, 1);
    readOrder();
};
