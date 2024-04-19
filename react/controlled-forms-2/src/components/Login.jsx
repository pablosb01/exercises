import { useState } from "react";

function Login({onLogin}) {
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
        onLogin(formData);
    };

    //declaro variable isDisabled, que es igual a un booleano (true o false) dependiendo si hay contenido(texto) en formData(username o password) que es lo que se pone en el form
   
    function resetData() {
        setFormData({
            username:"",
            password:'',
            remember:false
        });
    };

    const isDisabled = formData.username === '' || formData.password === '';
    
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
            {/* uso disabled(propiedad del boton) y le doy de valor la constante declarada previamente (true o false) */}
            {/* esto hace que si no hay texto en alguno de los dos campos se desactive el boton porque pasaria true, si hay contenido en los dos pasaria false y se activaria el boton */}
            <button type='submit' disabled={isDisabled}>Iniciar sesion</button>
            <button type='button' onClick={resetData}>Reset</button>
        </form>
    )
}

export default Login