import React, { useState } from 'react';
import { toast } from 'react-toastify'
import logo from '../../assets/logo.svg'

import history from '../../services/history'
import api from '../../services/api'

export default function RecoverPassword() {
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      token,
      password
    };

    try {
      await api.put('passwords', data)
      toast.info('Boooaaa! Sua senha foi alterada com sucesso, bora logar!')
      history.push('/login')
    } catch (err) {
      toast.error('Algo deu errado ao resetar sua senha, verifique se o token está correto')
    }
  }

  return (
    <React.Fragment>
      <img src={logo} alt="logo" />

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite seu token"
          value={token}
          onChange={e => setToken(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua nova senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Alterar senha</button>
        <div className="a" style={{marginTop: 10}} >
          <a href="/login">Voltar</a>
        </div>
      </form>
      <div className="footer">
        <small>Harry Potter Challenge 1.0</small>
        <small>By: Mateus 2020 © Todos os direitos reservados</small>
      </div>
  </React.Fragment>
  )
}
