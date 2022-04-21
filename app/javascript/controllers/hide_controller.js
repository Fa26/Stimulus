import { Controller } from "@hotwired/stimulus"
export default class extends Controller {

    static targets=["butonHide","card","h"]
    static classes=["hide"]
  

    connect() {
        //  this.element.textContent = "Hello World!"
          console.log("hola desde stimulus hide")
        }

 

}