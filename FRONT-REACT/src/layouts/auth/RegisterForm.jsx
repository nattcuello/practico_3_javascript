import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import {Formik, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
import { Password } from 'primereact/password';
import { Card } from "primereact/card"
import { Button } from "primereact/button"

const RegisterForm = () =>{
    const {register} = useContext(AuthContext)

    const initialValues = {
        nombre:'',
        email:'',
        password:'',
        edad:null,
    }

    const validationSchema= Yup.object({
        nombre: Yup.string().required('Campo requerido'),
        email: Yup.string().email('Email invalido').required('Campo requerido'),
        password: Yup.string().min(6,'Minimo 6 caracteres').required('Campo requerido'),
        edad: Yup.number().min(1,"Debe ser mayor a 0").max(90,"Debe ser menor a 90").required('Campo requerido')
    })

    const onSubmit = async (values) =>{
        console.log("llego", values);
        await register(values)
    }

    return(
        <Card title='Registrarse'>
            <Formik initialValues={initialValues} validationSchema={validationSchema}
            onSubmit={onSubmit}>
                {({handleChange, values, setFieldValue})=>(
                    <Form className="p-fluid">
                        <label>Nombre</label>
                        <InputText name='nombre' value={values.nombre} onChange={handleChange}/>
                        <span><ErrorMessage name='nombre'/></span>

                        <label>Email</label>
                        <InputText name='email' value={values.email} onChange={handleChange}/>
                        <span><ErrorMessage name='email'/></span>

                        <label>Contraseña</label>
                        <Password name="password" value={values.password}  
                            onChange={(e)=>setFieldValue("password", e.target.value)} 
                            toggleMask />
                        <span><ErrorMessage name='password'/></span>

                        <label>Edad</label>
                        <InputNumber name='edad' value={values.edad} 
                            onValueChange={(e)=>setFieldValue('edad',e.value)}  
                            min={1} max={90}/>
                        <span><ErrorMessage name='edad'/></span>

                        <Button label="Registrarse" type='submit' className="p-mt-3"/>
                    </Form>
                )}
            </Formik>
        </Card>
    )
}
export default RegisterForm
