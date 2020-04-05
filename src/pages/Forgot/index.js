import React, { useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import logo from '../../assets/logo.svg'

import api from '../../services/api'
import history from '../../services/history'
import FooterComponent from '../../components /Footer'

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um email válido').required('O email é obrigatório'),
})

export default function Forgot() {
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      email,
    }

    try {
      await api.post('passwords', data)
      toast.info('Um email foi enviado pra você, utilize o token para alterar sua senha')
      history.push('/recover')
    } catch (err) {
      toast.error('Alguma coisa deu errada ao enviar o email, tente novamente')
    }
  }

  return (
    <React.Fragment>
      <img src={logo} alt='logo' />

      <form schema={schema} onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          placeholder='Seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type='submit'>Enviar email</button>
        <div className='a' style={{ marginTop: 10 }}>
          <a href='/login'>Voltar</a>
        </div>
      </form>
     <FooterComponent />
    </React.Fragment>
  )
}
