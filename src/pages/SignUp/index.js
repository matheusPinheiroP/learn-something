import React, { useState } from 'react';
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import history from '../../services/history';
import logo from '../../assets/logo.svg'
import FooterComponent from '../../components /Footer'

import api from '../../services/api'

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().min(6).required('A senha é obrigatória')
})

export default function SignUp() {
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username,
      email,
      password
    }

    try {
        await api.post('users', data)
        toast.info('Muito bem, sua conta foi criada com sucesso.')
        history.push('/login')
      } catch (err) {
        toast.error('Alguma coisa deu errada, verifique seus dados')
      }
    }

  return (
    <React.Fragment>
      <img src={logo} alt="logo" />

      <form schema={schema} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome completo"
          value={username}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Sua senha segura"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Criar conta</button>

        <div className="a" style={{marginTop: 10}} >
          <a href="/login">Já tenho conta</a>
        </div>
      </form>
      <FooterComponent />
  </React.Fragment>
  )
}


