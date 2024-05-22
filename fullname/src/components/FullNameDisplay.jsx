import React, { useState } from 'react'
import styles from './FullNameDisplay.module.css'

export default function FullNameDisplay() {
  let [formData, setFormData] = useState({firstName:"", lastName:""})
  let [displayFullName, setDisplayFullName] = useState(false)

  function handleChange(event){
    setDisplayFullName(false)
    const {name, value} = event.target
    setFormData((prevValue) => ({...prevValue, [name]:value}))
  }

  function handleSubmit(event){
    event.preventDefault()
    setDisplayFullName(true)
  }

  let fullNameEle = <div>
                       <label>
                           Full Name: {formData.firstName} {formData.lastName}
                       </label>
                    </div>
  return (
    <div>
        <form className={styles.formDiv} onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type='text' name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <br/>
            <label>
                Last Name:
                <input type='text' name="lastName" value={formData.lastName} onChange={handleChange} required/>
            </label>
            <br/>
            <button>Submit</button>
        </form>
        {displayFullName ? 
        fullNameEle: ''}
    </div>
  )
}
