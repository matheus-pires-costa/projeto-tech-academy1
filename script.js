
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      alert("Seus dados foram enviados!"); 
      form.reset(); 
    });
  });
