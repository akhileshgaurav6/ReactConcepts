import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit (data) {

    //Api call ko simulate krte hai
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          First Name: </label>
        <input 
        className={errors.firstname ? 'input-error' : ""}
        {...register('firstname', {
          required: true, 
          minLength: {value:3, message: 'Min length atleast 3'}, 
          maxLength: {value:6, message: "Max length atmost 6"}
          })}/>
          {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
      </div>
      <br/>
      <div>
        <label>
          Middle Name: </label>
        <input className={errors.firstname ? 'input-error' : ""} {...register('middlename')}/>
      </div>
      <br/>
      <div>
        <label>
          Last Name: </label>
        <input className={errors.firstname ? 'input-error' : ""} {...register('lastname', {
          pattern: {
            // value: /^[A-Za-z]$ /i ,
            message: "Last name is not as per rules"
          }
        })}/>
        {errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
      </div>

    <br/>

    <input type='submit' disabled={isSubmitting}
    value={isSubmitting ? "Submitting" : "Submit"}/>
    </form>
  )
}

export default App
