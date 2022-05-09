import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
    static targets =["name","anuncement","uno","dos","botonAlert","card"]
  

  connect() {
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1583144568008-76743354fa5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
    document.body.style.backgroundRepeat="no-repeat"
    document.body.style.backgroundSize="cover"
    console.log("hola desde stimulus")
  }
  greet(){
    const element = this.nameTarget.value
    const len = element.length
    var  resultado = len %3
     
    if(resultado == 0 && len != 0){
      this.anuncementTarget.textContent=`Multiplo`
    }else{
      console.log(`hello, ${name},${len}`)
      this.anuncementTarget.textContent=``
    }


  }

  checar(event){
    
    var uno = event.target
    var card=this.cardTarget
    console.log(uno.dataset.id)
    if(uno.dataset.id == "one"){
      console.log("boton uno")
      card.textContent="Boton Uno!"
      document.body.style.backgroundImage="url('https://cdn.pixabay.com/photo/2019/03/28/10/19/sunset-4086848_960_720.jpg')"
      document.body.style.backgroundRepeat="no-repeat"
      document.body.style.backgroundSize="cover"
    }else if (uno.dataset.id == "two"){
      console.log("boton dos")
      card.textContent="Boton Dos!"
      document.body.style.backgroundImage="url('https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_960_720.jpg')"
      document.body.style.backgroundRepeat="no-repeat"
      document.body.style.backgroundSize="cover"

    }else if(uno.dataset.id == "last"){
      console.log("boton tres")
      card.textContent="Boton Tres!"
      document.body.style.backgroundImage="url('https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319_960_720.jpg')"
      document.body.style.backgroundRepeat="no-repeat"
      document.body.style.backgroundSize="cover"



    }
  }




 
}
