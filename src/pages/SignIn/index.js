import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from '../../store/modules/auth/actions'

import logo from '../../assets/logo.svg'
import FooterComponent from '../../components /Footer'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .required('A senha é um campo obrigatório')
})

export default function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <React.Fragment>
      <img src={logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <Link to="/forgot">Esqueci minha senha</Link>
        <button type="submit">{ loading ? 'Carregando...' : 'Entrar' }</button>

        <div className="new-account">
          Não é registrado?
          <Link to='/register'> Registre-se</Link>
        </div>
      </Form>
      <FooterComponent />
  </React.Fragment>
  )
}
