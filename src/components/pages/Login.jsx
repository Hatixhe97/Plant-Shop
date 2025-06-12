import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
import { CUSTOM_ROUTES } from "../constants/custom-routes";
import { useState,useEffect,useRef } from 'react';
import { login} from '../../services/authServices';

const Login=()=>{

    const navigate = useNavigate();
    
    /*const handleCreatAccount = () => {
        navigate(CUSTOM_ROUTES.REGISTER);
    }*/

    const [email,setEmail] = useState ('');
    const [password,setPassword] = useState ('');

    //const [isRegistrationSuccess, setIsRegistrationSuccess]=useState(false)


    const handleLogin = async (event) =>{
        event.preventDefault();

        if(email.trim().length === 0 || password.trim().length === 0) {
            alert('Please fill the inputs!')
        }

        try{
            await login(email,password);
            navigate(CUSTOM_ROUTES.HOME)
        } catch (error) {
            alert('Login failed!')

        }
    }

  /*if (isRegistrationSuccess) {
        return(
         <h1>Registration was successfully!</h1>
        )
    }*/

    


    return(
        <>
        <div className={styles.logincart}>
            <h1>Log in to your account</h1>

            <form onSubmit={handleLogin}> 
                <div className={styles.formgroup}>
                  <label>Email:</label>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
               </div>

               <div className={styles.formgroup}>
                 <label>Password:</label>
                 <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
               </div>

               <div className={styles.select}>
                  <p>Forgot password?</p>
                 <p>Don’t have an account? <Link to={CUSTOM_ROUTES.REGISTER}><span className={styles.click} /*onClick={handleCreatAccount}*/>Create</span></Link></p>
               </div>

                <button>Log In</button>

            </form>
           
        </div>
        

        </>
    )
}

export default Login;