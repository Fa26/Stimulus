import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
    static targets =["tipo","cardTipo","img","per"]
    static classes = ["hide"]
    connect(){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="cover"
        console.log("hola desde postController")
        const element = document.getElementsByTagName("img");
        var tam= document.getElementById("tam")
        element[0].onload = function() {
            tam.textContent= 'Tamaño:'+this.width + 'x' +this.height
        }
        
        
    }
      
   

    hidePrivate(event){
      // var selector= document.getElementById('option')
       //var personas= document.getElementById('personas')
        console.log("desde select")

       //var text = selector.options[selector.selectedIndex].text === 'Public' ? personas.style.display="none" : personas.style.display="block"
       //var textD = selector.options[selector.selectedIndex].text
       //console.log(textD)
       //this.validarTipo(textD)
      
    }
    
    validarTipo(tipo){
        const inputF = document.querySelector('input[type=text]').value
        var t= inputF.length
        console.log("dentro de validar")
        console.log(t)
        if(t === 0 &&tipo === 'Private'){
            alert("No puedes dejar personas en blanco")
        }else{
            //alert("todo bien")
        }

    }
   

    imageUpload(event){
        const inputF = document.querySelector('input[type=file]')
        console.log("algo subio")
        console.log(inputF.size)
       
    }
 
}   