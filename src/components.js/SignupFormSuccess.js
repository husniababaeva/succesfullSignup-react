import React from 'react'

function SignupFormSuccess() {
    return (
        <div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-sm-8 d-flex justify-content-center ">
                    <div className="card py-5 rounded shadow" style={{ width: 450, height:550}}>
                        <div className="card-body text-center py-5 mx-3">
                            <span className="text-success font-weight-bold mt-5 d-block fs-lg-25">Registration Successful!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignupFormSuccess
