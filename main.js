//lab7
let service = [];
service[0] = {
    name: "Електропостачання",
    price: 100.00
};
service[1] = {
    name: "Водопостачання",
    price: 110.00
};
service[2] = {
    name: "Ліфт",
    price: 50.00
};
let days = [];
days[0] =
{
    name: "Будні",
    price: 10.00
}
days[1] =
{
    name: "Вихідні",
    price: 50.00
}
let selector = document.querySelector("#service");
let selectorD = document.querySelector('#day');
selector.innerHTML = '';
selectorD.innerHTML = '';
function createSelect(sel,ar)
{
    for (let i = 0; i < ar.length;i++)
    {
        const option = document.createElement("option");
        option.value = i;
        option.text = ar[i].name;
        
        sel.add(option);
        }

}
createSelect(selector, service);
createSelect(selectorD, days);
let 
function calc_price(ar, i, ad, d)
{
    return ar[i].price + ad[d].price;
}
let index_serv = selector.options[selector.selectedIndex].value;
let index_day = selectorD.options[selector.selectedIndex].value;

let services = document.getElementById("calc");
services.onclick = function () {
    index_serv = selector.options[selector.selectedIndex].value;
    index_day = selectorD.options[selector.selectedIndex].value;
    price_serv = calc_price(service, index_serv, days, index_day)
    let price_h3 = document.querySelector("#price_serv");
    price_h3.innerHTML = 'Вартість = '+price_serv;   
}