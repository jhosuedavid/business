import React from "react";
import PropTypes from "prop-types";
import useLogin from "../../../hooks/useLogin";
import Input from "../../../components/commons/input";
import Button from "../../../components/commons/button";

const LoginHoc = () => {
    const hook = useLogin();
    return <Login {...hook} />;
};

const Login = (props) => (
    <div style={style.containerFather}>
        <div style={style.container}>
            <Input
                placeholder="Ingrese Correo"
                value={props.email}
                onChange={props.changeEmail}
            />
            <br/>
            <Input
                type="password"
                placeholder="Ingrese Contraseña"
                value={props.password}
                onChange={props.changePassword}
            />
            <br/>
            <Button
                text="Iniciar sesion"
                onClick={props.signIn}
                isActive={props.isValidForm}
            />
        </div>
    </div>
);

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    isValidForm: PropTypes.bool,
    changeEmail: PropTypes.func,
    changePassword: PropTypes.func,
    signIn: PropTypes.func,
};

Login.defaultProps = {
    email: '',
    password: '',
    isValidForm: false,
    changeEmail: () => {},
    changePassword:  () => {},
    signIn:  () => {},
};

const style= {
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    containerFather:{
        position:"fixed",
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
}

export default LoginHoc;