import { useState } from "react";
import { Link } from "react-router-dom";
import { CUSTOM_ROUTES } from "../../constants/custom-routes";

const Register =()=>{

    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');

    const [isRegistrationSuccess, setIsRegistrationSuccess]=useState(false)
    
        const handleRegister = async (event) =>{
            event.preventDefault();
    
            if(email.trim().length === 0 || password.trim().length === 0) {
                alert('Please fill the inputs!')
            }
    
            try{
                await register(email,password);
                setIsRegistrationSuccess(true);
                alert('Registration is made seuccessfully!')
            } catch (error) {
    
            }
        };

        if (isRegistrationSuccess) {
            return(
                <h1>Registration was successfully!</h1>
            )
        }


    return(
        <>
        <div>
            <h1>Creat your account</h1>

            <form>

                <Link to={CUSTOM_ROUTES.LOGIN}>Back to Log In</Link>
            </form>
        </div>

        </>
    )
}

export default Register;