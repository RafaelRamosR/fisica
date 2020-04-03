export default class Operations{
    constructor(operation){
        this.operation = operation
    }
    getOpreacion() {
        return this.operation
    }
    setOpreacion(operation) {
        this.operation = operation
    }

    typeOperation(){
        let inputs = Array.from(document.querySelectorAll('input')),
        selects = Array.from(document.querySelectorAll('select')),
        inputSelects = selects.concat(inputs),
        resultado =document.getElementById('resultado')
        if(this.operation===""){
            for(let input of inputSelects.slice(1)){
                input.disabled = true;
            }
        }else{
            // for (let i = 0; i < resultado.children.length; i++) {
            //     const recorrer = resultado.children[i];
            //     if(resultado.children[0].querySelector(`input[name='${this.operation}']`) !== null){
                    
            //         let madre = document.getElementById('madre')
            //         let copy = recorrer.children[1]
            //         if(madre.children[1]){
            //             madre.children[1].remove()
            //         }
            //         madre.appendChild(copy)
            //     }
            //   }
        //return validacion = true
        }
    }
}

    operacion = document.getElementById('operacion'),
    inp = Array.from(document.querySelectorAll('input')),
    sel = Array.from(document.querySelectorAll('select')),
    inputSelects = sel.concat(inp),
    resultado =document.getElementById('resultado'),
    validacion
//Si no se selecciona una operación se desactivan los inputs
const desactivar = () => {
    let form = document.getElementById('form')
    form.reset()

    if(operacion.value===""){
      for(let input of inputSelects.slice(1)){
        input.disabled = operacion.value === "" ? true : false
       }
    }else{
        for(let input of inputSelects.slice(1)){
            input.disabled = false;
        }
        bloquear(`${operacion.value}`)
        validacion = true
        return validacion
    }
  }
  //Bloquea el input elegido por el select operación
  //Reinicia el los valores del formulario
  //Asigna valor cero al input seleccionado
  const bloquear = (id) => {
    let hijos = resultado.children
    for (let i = 0; i < hijos.length; i++) {
      const hijo = hijos[i];
      if(hijo.querySelector(`#${id}`) !== null){
        hijo.remove()
        resultado.appendChild(hijo)
        document.getElementById(`${id}`).value = 0
        document.getElementById(`${id}`).disabled = true
        document.getElementById(`unidad-${id}`).disabled = true
      }
    }
  }