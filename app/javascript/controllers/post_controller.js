import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
    static targets =["tipo","cardTipo","img","per"]
    static classes = ["hide"]
    connect(){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="cover"
        console.log("hola desde postController")
        this.element.addEventListener("submit",this.clear)
        const element = document.getElementsByTagName("img");
        var tam= document.getElementById("tam")
        element[0].onload = function() {
            tam.textContent= 'Tamaño:'+this.width + 'x' +this.height
        }
        
        
    }
      
   

    hidePrivate(e){
         const s = e.target
         console.log(s)
       
         var seles= document.getElementById("tipo")
         console.group(seles)
       
       //var personas= document.getElementById('personas')
        console.log("holaselct")
      // var text = selector.options[selector.selectedIndex].text === 'Public' ? personas.style.display="none" : personas.style.display="block"
       //this.validarTipo(textD)
       document.getElementById("personas").classList.add("hidden")

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
       console.log( inputF[0].this.width)
       
    }

    clear(){
        this.element.reset()
       }
 
}   