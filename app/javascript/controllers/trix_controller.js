import { Controller } from "@hotwired/stimulus"


export default class extends Controller {


  initialize() {
    this.allowSync = true
    this.setupTrix()
  }
   
  setupTrix(){
    Trix.config.blockAttributes.heading = {
        tagName: "h2",
        terminal: true,
        breakOnReturn: true,
        group: false
    }
    
    Trix.config.blockAttributes.subHeading = {
        tagName: "h3",
        terminal: true,
        breakOnReturn: true,
        group: false
    }
  }


  get pieceAtCursor() {
    return this.trixEditorDocument.getPieceAtPosition(this.trixEditor.getPosition())
  }

  get trixEditor() {
    return this.trix.editor
  }

  get trixEditorDocument() {
    return this.trix.editor.getDocument()
  }
  get currentState() {
    return {
    
      trix: this.trix
    }
  }

 
}