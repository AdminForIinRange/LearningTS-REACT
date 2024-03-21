import React from 'react'

const InputFeild:  React.FC = () => {





  return (
    <form className='input' >
<input type="input" placeholder='Enter A Task'  className='input__box'/>
<button  className='input__submit' type='submit' >
    Go
</button>
    </form>
  )
}

export default InputFeild