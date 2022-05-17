import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

 static targets =["slide","saludo"]
 static values ={index:Number}

   connect() {
    console.log("hola desde carusel")
  }
  

    next(){
        this.indexValue++
    }

    previous(){
        this.indexValue--
        console.log(this.index)
    }

    indexValueChanged(){
      this.showCurrentSlide()
    }

    showCurrentSlide(){
        this.slideTargets.forEach((element,index) =>{
            element.hidden = index != this.indexValue
        })
    }

    

   

}