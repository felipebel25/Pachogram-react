import { useState } from 'react'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  console.log(value)
  return { value, onChange }
}

export default useInputValue
