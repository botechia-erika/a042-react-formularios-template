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
    const {form , onChangeForm} = useForm({username: "", email: "", password: "", password_password: ""})
    const enviarCadastro = () => {
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (form.password === form.password_password) {
            console.log(form.username, form.email, form.password_password)
        }
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor="username">Nome de usuario:</label>
                <Input
                    id={'username'}
                    name={"username"}
                    value={form.username}
                    onChange={onChangeForm}
                    placeholder="username"
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    id='email'
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                    placeholder="nome@email.com"
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    name={"password"}
                    id={"password"}
                    value={form.password}
                    onChange={onChangeForm}
                    placeholder="Crie sua senha"
                />
                <label htmlFor='password_password'>Confirmação de senha:</label>
                <Input
                    id='password_password'
                    name="password_password"
                    value={form.password_password}
                    onChange={onChangeForm}
                    placeholder="Confirme a senha"
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
