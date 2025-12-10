let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener("click",function(event) {
    if(inp.value === "") return;

    let item = document.createElement('li');
    let inpItem = document.createElement('input');
    inpItem.type = "checkbox";

    inpItem.addEventListener("change",function(event) {
        if(inpItem.checked) {
            item.style.backgroundColor = "lightgreen";
        }else{
            item.style.backgroundColor = "lightblue";
        }
    })

    let innerBtn = document.createElement('button');
    innerBtn.classList.add('delete');
    innerBtn.innerText = "Delete";

    innerBtn.addEventListener("click",function(event) {
        let currItem = event.target.parentElement;
        console.log(currItem.childNodes[1].textContent+" deleted");
        currItem.remove();
    });

    item.appendChild(inpItem);
    item.append(inp.value);
    item.appendChild(innerBtn);
    ul.appendChild(item);

    console.log(`${inp.value} added`);
    inp.value = "";
});
