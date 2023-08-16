import { useState } from "react";

export function useForm(initialState){
    
    // uso initialState para ser reaproveitavel ele vale o que recebe do contrario so serve se tiver as mesmas chavces
    const [form, setForm] = useState(initialState)
        
        
   /* estado do formulario original era  useState({
        username: "",
        email: "",
        password: "",
        password_password: ""
    })*/
   
    // Criar Função unica de on change para trabalhar todas as funções de on change
    // todas recebem value e muda a propidade 
    // aceder com notação de chaves - consigo acessar com variavel como valor não quiebra undefined
    
    const onChangeForm=(e)=>{
        console.log('validação front unificada')
        const {name, value} = e.target;
        // aceder pór notação de colchetes objeto desustruturado
        // usa name de cada input para aceder o valor especifico de cada campo
        // name olha para propiedade e value para elemento dentro de esta propiedade
        // em caso de aceder com . criaria nova variavel name
        console.log(`name: ${name} , value: ${value}`)
        setForm({...form, [name] : value } ) ;
    };
    
    return(
        // em paginas com unico formulario melhor usar objeto para evitar problemas com indice do array
        // mandando form dentro das chaves obrigatoriamente acesso os valores da chave no caso do array seguir ordem do indicer
        {form, onChangeForm}
    )
}