import { useState } from 'react'

import './App.css'
import { useForm } from 'react-hook-form'



  
 

function App() {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    setSuccess,
       formState: { errors, isSubmitting},

  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      }, d*1000);
    })
  }
  const onSubmit= async (data) =>{
    await delay(4) // simulating network delay
     console.log(data)
     if(data.username == "sanjeev"){
      // setError("myform", {message:"Invalid user name"})
      // setSuccess("valid",  {message:"Data valided"})
    
     }
    }


  return (
    <>

    {isSubmitting && <div>Please wait your data is submitting....</div>}
      <div className="container">
        <form action=""  onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='uername' {...register("username", { required:{value:true, message:"Empty field"} , minLength:{value:3, message:"Min length is 3"}, maxLength:{value:8, message:"Max length is 8"} })} type="text" />
          {errors.username && <div><span className='red'>{errors.username.message}</span></div>}
          <br />
          <input placeholder='password' {...register("password", { required:{value: true, message:"your password doesnt meet"}, minLength:{value:8,message:"password is less than 8"}})} type="password" />
          {errors.password && <div><span className='red'>{errors.password.message}</span></div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          
        </form>
      </div>
    </>
  )
}

export default App
