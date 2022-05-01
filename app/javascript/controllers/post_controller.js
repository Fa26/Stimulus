import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

    connect(){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
        document.body.style.backgroundRepeat="no-repeat"
        document.body.style.backgroundSize="cover"
        console.log("hola desde postController")
    }
   

}