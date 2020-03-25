const template = document.createElement('template')
template.innerHTML = `
    <style>
        h1 {
            color: red;
        }
        h2{
            color: blue;
        }
    </style>
    <h1><slot name="titulo"></slot></h1>
    <h2><slot name="subtitulo"></slot></h2>
`;

class myElement extends HTMLElement {
    constructor(){
        super();
        
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('my-element', myElement);