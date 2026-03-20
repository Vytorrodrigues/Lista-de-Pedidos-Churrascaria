const btn = document.getElementById("btn");
const inputOrder = document.getElementById("inputOrder");
const inputTable = document.getElementById("inputTable");
const list = document.querySelector(".list");
let allOrdersLister = [];

btn.addEventListener("click", (event) => {

    addOrder();
    readOrder();
    hasBlankSpace();

    event.preventDefault();
})

//Read order in ul
function readOrder() {

    list.innerHTML = "";
    allOrdersLister.forEach((item, index) => {
        
        let orderElement = document.createElement("li");

        orderElement.innerHTML = `
        <div>
            <strong>Mesa:</strong> 
            <p> ${item.table}</p> 
            <strong> Pedido:</strong> 
            <p>${item.order}</p>
        </div    
        `;
        
        orderElement.classList.add("itemList");

        let deleteOrderBtn = document.createElement("a");
        deleteOrderBtn.setAttribute("href", "#");
        deleteOrderBtn.classList.add("btnDelete");
        deleteOrderBtn.classList.add("btnEnd");

        let deleteText = document.createTextNode("X");
        deleteOrderBtn.appendChild(deleteText);

        deleteOrderBtn.onclick = () => deleteOrder(index);

        orderElement.appendChild(deleteOrderBtn);
        list.appendChild(orderElement);

    });
};

//ADD order on list and error background in the input
function addOrder(){
    //Alert
    if (inputOrder.value.trim() === "" || inputTable.value.trim() === "") {
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

        allOrdersLister.push({order: newOrder, table: newTable});
        inputOrder.value = "";
        inputTable.value = "";

        readOrder();
    }
};

function deleteOrder(position) {
    allOrdersLister.splice(position, 1);
    readOrder();
};
