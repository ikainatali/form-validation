import { useState } from "react";
function App() {
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData((preVal) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preVal.lname,
          email: preVal.email,
          password: preVal.email,
        };
      } else if (name === "lname") {
        return {
          fname: preVal.fname,
          lname: value,
          email: preVal.email,
          password: preVal.password,
        };
      } else if (name === "email") {
        return {
          fname: preVal.fname,
          lname: preVal.lname,
          email: value,
          password: preVal.password,
        };
      } else if (name === "password") {
        return {
          fname: preVal.fname,
          lname: preVal.lname,
          email: preVal.email,
          password: value,
        };
      }
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <>
      <div className='bg-img'></div>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <form onSubmit={submitForm}>
              <div className='d-flex'>
                <div className='form-floating col-6 gx-2'>
                  <input
                    type='text'
                    className='form-control pt-4'
                    id='fname'
                    name='fname'
                    onChange={inputEvent}
                    placeholder='name@example.com'
                  />
                  <label htmlFor='fname'>First Name</label>
                </div>
                <div className='form-floating col-6'>
                  <input
                    type='text'
                    className='form-control pt-4'
                    id='lname'
                    name='lname'
                    onChange={inputEvent}
                    placeholder='name@example.com'
                  />
                  <label htmlFor='lname'>Last Name</label>
                </div>
              </div>
              <div className='mb-3 mt-3'>
                <div className='form-floating'>
                  <input
                    type='email'
                    className='form-control pt-4'
                    id='email'
                    name='email'
                    onChange={inputEvent}
                    placeholder='name@example.com'
                  />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>
              <div className='form-floating pb-3'>
                <input
                  type='password'
                  className='form-control pt-4'
                  id='password'
                  name='password'
                  onChange={inputEvent}
                  placeholder='Enter Your Password'
                />
                <label htmlFor='password'>Password</label>
              </div>
              <button className='btn btn-warning justify-content-center'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
