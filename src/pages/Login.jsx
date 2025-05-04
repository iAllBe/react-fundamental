import React, {useContext} from 'react';
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
    }

    return (
        <div>
            <h1>Страница авторизации</h1>
            <form onSubmit={login}>
                <MyInput
                    type='text'
                    placeholder='Введите логин'
                />
                <MyInput
                    type='password'
                    placeholder='Введите пароль'
                />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;