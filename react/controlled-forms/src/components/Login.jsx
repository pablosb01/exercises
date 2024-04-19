import { useState } from "react";

function Login() {
    //State variables to hold form data
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        remember: false
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //logica para enviar datos del formulario
        console.log(formData.username, formData.password, formData.remember);
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nombre de Usuario:
                    <input type='text' name='username' value={formData.username} onChange={handleInputChange}/>
                </label>
            </div>
            <div>
                <label>
                    Contraseña:
                    <input type='password' name='password' value={formData.password} onChange={handleInputChange}/>
                </label>
            </div>
            <div>
                <label>
                    Recordar:
                    <input type='checkbox' name='remember' value={formData.remember} onChange={handleInputChange}/>
                </label>
            </div>
            <button type='submit'>Iniciar sesion</button>
        </form>
    )
}

export default Login