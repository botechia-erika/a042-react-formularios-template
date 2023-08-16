import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import { useForm } from '../../hooks/useForm'
export default function Signup() {
   /* const [nomeUsuario, setNomeUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [password_password, setpassword_password] = useState("")*/
    //const [senha, setSenha] = useState("")
   
   
   /* forma antiga
   const onChangeNome = (e) => {
       setForm({...form, username: e.target.value})
    }
    const onChangeEmail = (e) => {
        setForm({...form, email: e.target.email})
    }
    const onChangeSenha = (e) => {
        setForm({...form, password: e.target.password})
    }
    const onChangeConfirmPassword = (e) => {
        setForm({...form, password_password: e.target.value})
    }*/

    // Em esse ponto é onde altero o initialState para os valores recebidos
    const {form , onChangeForm} = useForm({registernname: "" , username: "", email: "", password: "", password_password: ""})
    const enviarCadastro = () => {
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (form.password === form.password_password) {
            console.log(form.registername , form.username, form.email, form.password_password)
        }
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                {/*em lugar de funcionario agrega registername */}
                <label htmlFor="registername">Nome de Cadastro:</label>
                <Input
                    id={'registername'}
                    name={"registername"}
                    value={form.registername}
                    onChange={onChangeForm}
                    placeholder="nome para cadastro"
                    type='text'
                    required
                />
                <label htmlFor="username">Nome de usuario:</label>
                <Input
                    id={'username'}
                    name={"username"}
                    value={form.username}
                    onChange={onChangeForm}
                    placeholder="username"
                    type='text'
                    required
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    id='email'
                    name="email"
                    value={form.email}
                    pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/'
                    onChange={onChangeForm}
                    placeholder="nome@email.com"
                    type='email'
                    required
                    title="o campo devera ser email valido ex: 'user@email.com'"
                />  
                <label htmlFor='password'>Senha:</label>
                <Input
                    name={"password"}
                    id={"password"}
                    value={form.password}
                    onChange={onChangeForm}
                    placeholder="Crie sua senha"
                    type='password'
                    required
                    title="senha deve ter de 8 a 12 caracteres e conter pelo menos 1 numero, 1 letra maiuscula e 1 caracter especial $*&@#'"
                    pattern='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/'
                />
                <label htmlFor='password_password'>Confirmação de senha:</label>
                <Input
                    id='password_password'
                    name="password_password"
                    value={form.password_password}
                    onChange={onChangeForm}
                    placeholder="Confirme a senha"
                    type="password"
                    required
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
