import React from 'react'
import '../../styles/formContainer.scss'

const FormContainer = ({children}) => {
  return (
    <div className='formContainer'>
        {children}
    </div>
  )
}

export default FormContainer