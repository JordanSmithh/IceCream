function getReceipt(){
    return `
        Base Price:
        Tax:
        Total Due:
    `;
}
function onContainerClicked(e) {
    toppings.style.display = cup.checked ? "block" : "none";
}
document.addEventListener("DOMContentLoaded", () => {
    cup.addEventlistner("click", onContainerClicked);
    cone.addEventlistner("click", onContainerClicked)
    submitorder.addEventListener("click", ()=>{
        outputReceipt.innerText = getReceipt();
    })
});