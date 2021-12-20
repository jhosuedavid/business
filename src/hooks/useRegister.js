import {useState, useMemo, useCallback} from "react";
import useApi from "./useApi";

const useRegister = () => {
    const {register: registerUser} = useApi();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const changeFirstName = (value) => {
        setFirstName(value);
    };
    const changeLastName = (value) => {
        setLastName(value);
    };
    const changeEmail = (value) => {
        setEmail(value);
    };
    const changePassword = (value) => {
        setPassword(value);
    };
    const changeConfirmPassword = (value) => {
        setConfirmPassword(value);
    };

    const isValidForm = useMemo(() => {
        return (
            firstName &&
            lastName &&
            email &&
            password &&
            confirmPassword &&
            password === confirmPassword
        )
    }, [
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    ]);

    const register = useCallback(() => {
        registerUser({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        });

        window.location.href = "/login"
    }, [
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    ]);


    return{
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        changeFirstName,
        changeLastName,
        changeEmail,
        changePassword,
        changeConfirmPassword,
        isValidForm,
        register,
    }
}

export default useRegister;