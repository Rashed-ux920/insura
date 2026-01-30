import { useState } from "react"

function EmailAuth({ email} ){
    const [emailAuthentcation, setEmailAuthentecation] =  useState()

    setEmailAuthentecation(email)
  return (
    <div>EmailAuth</div>
  )
}

export default EmailAuth