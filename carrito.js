

const clickbutton = document.querySelectorAll(".button");
let carrito =[];
const tbody = document.querySelector('tbody')

console.log(clickbutton)

clickbutton.forEach(e => {
    e.addEventListener('click', addtCarritotiem , console.log('button'))
   
});

function addtCarritotiem(e)
{
const button = e.target
//Con este metodo obtener lo que hay dentro de un div o contenido que deseamos obtener 
const item = button.closest('.card');
const itemTitle = item.querySelector('.card-title').textContent;
const precio = item.querySelector('.price').textContent;
const img = item.querySelector('.card-img-top').src;
console.log(item);
console.log(itemTitle);
console.log(precio);
console.log(img)


//Creamos un objeto
const newCar = {
    title: itemTitle,
    price : precio,
    img : img,
    cantidad: 1
}
additemcarrito(newCar);

}

function additemcarrito (newCar)
{
    const inputelment = tbody.getElementsByClassName('input-element');
   for(let i =0; i<carrito.length;i++)
   {
       if(carrito[i].title.trim() == newCar.title.trim())
       {
           carrito[i].cantidad ++;
           const inputb = inputelment[i];
           inputb.value ++ ;
           console.log(carrito)
           carritototal()
           return null;
        }
        swal("Producto Agregado!", "Gracias por su preferencia!", "success"); 
   }
   swal("Producto Agregado!", "Gracias por su preferencia!", "success"); 
carrito.push(newCar)
rendercarrito();

}
function rendercarrito(){

    tbody.innerHTML='';
    carrito.map (item =>{
        const tr = document.createElement('tr')
        tr.classList.add('ItemCarrito')
      
        const Content = `
        <tr class="text-white ">
              
                <td class="table_productos">
                    <img src="${item.img}" alt="" width="150px">
                      <h6 class="title text-white">${item.title}</h6>
                </td>
                <td class="table_price text-white">${item.price}</td>
                <td class="table_cantidad">
                    <input type="number" name="" id="" min="1" value="${item.cantidad}" class="input-element" style="width: 50px;">
                </td>
                <td>
                  
                    <button type="submit" class="delete btn btn-danger">X</button>
                </td>
              </tr>
        
        `;
        tr.innerHTML= Content;
        tbody.append(tr)
        tr.querySelector(".delete").addEventListener('click',remoItemCarrito)
        tr.querySelector(".input-element").addEventListener('change',sumaevent)
    })
carritototal()
}

// function comprar(){
//     swal("Good job!", "You clicked the button!", "success");  swal("Good job!", "You clicked the button!", "success");  
// }
function carritototal(){

    let total=0;
    const itemCarttotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item => {
        const precio =Number(item.price.replace("S/",''))
        total = total + precio * item.cantidad;

    }))
    itemCarttotal.innerHTML = `Total S/ ${total}`
    addLocalStorage()
}


function remoItemCarrito(e){
const buttondelete =e.target
const tr = buttondelete.closest('.ItemCarrito')
const title = tr.querySelector('.title').textContent;

for (let index = 0; index<carrito.length; index++) {

    if (carrito[index].title.trim() === title.trim()) {
        carrito.splice(index,1)
        console.log("gaaaa")
        
    }
    
}
tr.remove()
carritototal()
}
function sumaevent (e)
{
    const suma = e.target
    const tr= suma.closest('.ItemCarrito')
    const title2 = tr.querySelector('.title').textContent;
    carrito.forEach(e => {
        if (e.title.trim() === title2 ) {
          suma.value <1 ? (suma.value =1) : suma.value;
          e.cantidad = suma.value
          carritototal()  
        }
    })
}
function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
window.onload=function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        carrito= storage;
        rendercarrito( )
    }
}


