import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
    static targets =["tipo","field","fileImage"]
    static classes = ["hide"]
    connect(){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="cover"
        console.log("hola desde postController")
    }
   
    hidePrivate(){
        console.log(this.tipoTarget)
        console.log("cambio")

    }

    imageUpload(event){
        const inputF = document.querySelector('input[type=file]')
        console.log("algo subio")
        console.log(inputF.size)
        console.log(inputF.width)

    }
}   