import React, { useState,useEffect } from 'react';
import validation from './validation';
import "../App.css"

const SignupForm = ({ submitForm }) => {

    const [values, setValues] = useState({
        firstname: "",
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
        console.log("handleChange")
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values))
        setDataIsCorrect(true)
        console.log("handleFormSubmit")
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);
    return (
        <div >
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-sm-8 d-flex justify-content-center ">
                    <div className="card py-5 rounded shadow" style={{ width: 450, }}>
                        <h2 className="text-center font-weight-bold mb-5 text-info">Creat account</h2>
                        <div className="card-body mx-3">
                            <form>
                                <div className="mb-4">
                                    <label className="d-block text-secondary m-0" >First Name</label>
                                    <input
                                        type="name"
                                        className="w-75 w-100 text-secondary"
                                        name="firstname"
                                        value={values.firstname}
                                        onChange={handleChange}
                                    />
                                    {errors.firstname && <p className="error" >{errors.firstname}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="d-block text-secondary m-0" >Email</label>
                                    <input
                                        type="email"
                                        className="w-75 w-100 text-secondary"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="error" >{errors.email}</p>}

                                </div>
                                <div className="mb-4">
                                    <label className="d-block text-secondary m-0" >Password</label>
                                    <input
                                        type="password"
                                        className="w-75 w-100 text-secondary"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <p className="error" >{errors.password}</p>}

                                </div>
                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="submit"
                                        onClick={handleFormSubmit}
                                    >Sign Up</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignupForm;
