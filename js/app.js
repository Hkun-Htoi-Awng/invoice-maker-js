
//selectors

let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let addBtn = document.querySelector("#addBtn");
let formInput = document.querySelector("#formInput");
let rows = document.querySelector("#rows")
let total = document.querySelector("#total")




//function

function calcTotal(){
    let costs = document.querySelectorAll('.cost');
    total.innerText= [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
}

function del(event){
        if(confirm('Are You Sure To Delete')){
            event.target.parentElement.parentElement.remove();
            calcTotal();
        }
    }


//process

products . forEach(function(product){
    let newOption = new Option(product.name,product.id);
    items.append(newOption)
})


formInput.addEventListener('submit',function(e){
    e.preventDefault();
    let currentProduct = products.find(product => product.id == items.value);
    let cost = currentProduct.price * quantity.valueAsNumber;
    let newTr = document.createElement("tr");
                newTr.innerHTML = `



                    <td>
                    ${currentProduct.name}
                    <p class="small text-danger  mb-0 del-btn"  onclick="del(event)">Delete</p>
                    </td>
                    <td class="text-end">${currentProduct.price}</td>
                    <td class="text-end">${quantity.valueAsNumber}</td>
                    <td class="text-end cost" >${cost}</td>
                    `
    rows.append(newTr);
    formInput.reset();
    calcTotal();
    
    
    

})


//delete icon net lok dr myo

{/* <td>
<button class="btn btn-sm btn-outline-danger del-btn" onclick="del(event)">
    <i class="bi bi-trash3"></i>
</button>
</td> */}