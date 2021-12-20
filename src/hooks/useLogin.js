import {useState, useMemo, useCallback} from 'react';
import useApi from "./useApi";

const useLogin = () => {
    const {login} = useApi();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (value) => {
        setEmail(value);
    };

    const changePassword = (value) => {
        setPassword(value);
    };

    const isValidForm = useMemo(() => {
        return email && password;
    }, [email, password]);

    const signIn = useCallback(() => {
        const isExist = login(email, password);
        if (isExist) {
            alert('El usuario existe');
            window.location.href = '/dashboard';
        } else {
            alert('El user no esta registrado');
        }
    }, [email, password]);

    return {
        email,
        password,
        isValidForm,
        changeEmail,
        changePassword,
        signIn,
    };
};

export default useLogin;