function login()
{
   let idcodigo = document.getElementById("iduser").value;
   let password = document.getElementById("idpassword").value;


   

   if (idcodigo == "12" && password =="123456")
   swal("Producto Agregado!", "Gracias por su preferencia!", "success");  
       
 window.location = "index.html";
       
   
  

   console.log(idcodigo,password)
}