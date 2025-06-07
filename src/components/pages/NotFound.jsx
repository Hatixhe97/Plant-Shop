import { useNavigate } from "react-router-dom";
import { CUSTOM_ROUTES } from "../constants/custom-routes";

const NotFound =()=>{
    const navigate = useNavigate();

    const backToHome=()=>{
        navigate(CUSTOM_ROUTES.HOME)
    }

    return(
        <div 
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"80vh"
        }}>
            <h1>This page does not exist!</h1>
            <button 
            style={{
                backgroundColor: "#C1DCDC",
                width:"150px",
                height:"50px",
                borderRadius:"40px",
                color:"white",
                border:"none",
                cursor:"pointer"
            }} 
            onClick={backToHome}>Back to Home</button>
        </div>
    )
}

export default NotFound;