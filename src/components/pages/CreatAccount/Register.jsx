
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Register.module.css'; 
import { register } from '../../../services/authServices'
import { CUSTOM_ROUTES } from '../../constants/custom-routes';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        try {
            await register(email, password);
            alert('Registration successful! Please log in.');
            navigate(CUSTOM_ROUTES.LOGIN); 
        } catch (error) {
            console.error('Registration failed:', error.message);
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <div className={styles.registerCard}>
            <h1>Create your account</h1>
            <form onSubmit={handleRegister}>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={styles.buttonregister} type="submit">Register</button>
                <p className={styles.p}>Already have an account? <Link to={CUSTOM_ROUTES.LOGIN}>Login here</Link></p>
            </form>
        </div>
    );
};

export default Register;