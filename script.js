const btn = document.getElementById("btn");
const inputOrder = document.getElementById("inputOrder");
const inputTable = document.getElementById("inputTable");
const list = document.querySelector(".list");
let allOrdersLister = JSON.parse(localStorage.getItem("@order")) || [];

regexExcludeNumber();

btn.addEventListener("click", (event) => {

    addOrder();
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

readOrder();

//ADD order on list and error background in the input
function addOrder(){
    //Alert
    if (inputOrder.value.trim() === "" && inputTable.value.trim() === "") {
        let main = document.querySelector("main");
        let alertIcon = document.createElement("span");

        alertIcon.classList.add("alertIcon");

        let textAlert = document.createTextNode("⚠️Você não digitou o pedido!");
        alertIcon.appendChild(textAlert);
        main.appendChild(alertIcon);

        if(main.childElementCount > 4 ){
            alertIcon.remove();
        }

        setTimeout(() => {
            alertIcon.remove();
        }, 2000);

        return false;
    } else {
        let newOrder =  inputOrder.value.trim();
        let newTable = inputTable.value.trim();

        allOrdersLister.push({order: newOrder, table: newTable});
        inputOrder.value = "";
        inputTable.value = "";

        saveDate();
        readOrder();
    }
};

function deleteOrder(position) {
    allOrdersLister.splice(position, 1);
    readOrder();
    saveDate();
};

function saveDate(){
    localStorage.setItem("@order", JSON.stringify(allOrdersLister));
};

function regexExcludeNumber(){
    
    inputTable.addEventListener("input", () => {
        let regexString = /\D+/g;
        let regexBlankSpace = /\s+/g;
        let valueString = inputTable.value.replace(regexString, "");
        let valueBlank = inputTable.value.replace(regexBlankSpace, "");
        
        if( valueString == false){

            let form = document.querySelector("form");
            let reload = document.createElement("a");
            let reloadText = document.createTextNode("Reload-Page");

            btn.style.backgroundColor = "Grey";
            btn.classList.add("disableBtn");
            btn.disabled = true;

            reload.appendChild(reloadText);
            reload.setAttribute("href", "#");
            reload.onclick = () => window.location.reload();
            reload.classList.add("btnReload");
            form.appendChild(reload);

            
            if (form.childElementCount > 4) {
                reload.remove();
            };
        };
    });

};
