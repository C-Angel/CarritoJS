function login()
{
   let idcodigo = document.getElementById("iduser").value;
   let password = document.getElementById("idpassword").value;


   

    
   if (idcodigo == "angelticclla@gmail.com" && password =="123456" || idcodigo=="griselda@gmail.com" && password=="123456")
   {

   
       
 window.location = "index.html";
}
else {
  swal({
    title: "Usuario o password invalidos",
    text: "Intente nuevamente ",
    icon: "warning",
  
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      
      
    } 
  });
}
   
  

   console.log(idcodigo,password)
}