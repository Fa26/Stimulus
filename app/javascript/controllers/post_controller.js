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
      
   

    hidePrivate(){
        console.log(this.tipoSelect(this.element.value))
        console.log("holaselct")
      // var text = selector.options[selector.selectedIndex].text === 'Public' ? personas.style.display="none" : personas.style.display="block"
       document.getElementById("personas").classList.add("hidden")

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