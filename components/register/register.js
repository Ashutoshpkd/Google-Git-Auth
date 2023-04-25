import Link from 'next/link';
import styles from './register.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState, useRef } from 'react';
import { isEmailValid, isPasswordValid, isUsernameValid } from '../../helpers/validation';

export default function Register() {
    const [showPass, setShowPass] = useState({ password: false, cpassword: false });
    const [hasError, setHasError] = useState({
        email: false,
        username: false,
        pass: false,
        cpass: false,
    });
    const emailRef = useRef();
    const passRef = useRef();
    const cpassRef = useRef();
    const usernameRef = useRef();

    const areInputValid = () => (
        !hasError.email && !hasError.username && !hasError.pass && !hasError.cpass
    );

    const handleEmailBlur = () => {
        const isValid = isEmailValid(emailRef.current.value);
        setHasError(e => ({ ...e, email: !isValid }));
    };
    const handleUsernameBlur = () => {
        const isValid = isUsernameValid(usernameRef.current.value);
        setHasError(e => ({ ...e, username: !isValid }));
    };
    const handlePassBlur = () => {
        const isValid = isPasswordValid(passRef.current.value);
        setHasError(e => ({ ...e, pass: !isValid }));
    };
    const handleCpassBlur = () => {
        const cpass = cpassRef.current.value
        let isValid = isPasswordValid(cpass);
        isValid = isValid && cpass === passRef.current.value;
        setHasError(e => ({ ...e, cpass: !isValid }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const pass = passRef.current.value;
        const cpass = cpassRef.current.value;
    }

    return (
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className='title'>
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                <p className='w-3/4 mx-auto text-gray-400'>My name is Ashutosh</p>
            </div>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <div className={styles.input_group}>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        className={styles.input_text}
                        ref={usernameRef}
                        onBlur={handleUsernameBlur}
                    />
                    <span className="icon flex items-center px-4">
                        <HiOutlineUser size={25}/>
                    </span>
                </div>
                {hasError.username && <span className='text-left px-1 text-red-500'>Please enter valid username</span>}
                <div className={styles.input_group}>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        className={styles.input_text}
                        ref={emailRef}
                        onBlur={handleEmailBlur}
                    />
                    <span className="icon flex items-center px-4">
                        <HiAtSymbol size={25}/>
                    </span>
                </div>
                {hasError.email && <span className='text-left px-1 text-red-500'>Please enter valid email</span>}
                <div className={styles.input_group}>
                    <input 
                        type={showPass.password ? 'text' : 'password'}
                        name='password'
                        placeholder='Password'
                        className={styles.input_text}
                        ref={passRef}
                        onBlur={handlePassBlur}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShowPass(p => ({...p, password: !p.password }))} id={styles.icon_finger}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                {hasError.pass && <span className='text-left px-1 text-red-500'>Please enter strong password</span>}
                <div className={styles.input_group}>
                    <input 
                        type={showPass.cpassword ? 'text' : 'password'}
                        name='cpassword'
                        placeholder='Confirm Password'
                        className={styles.input_text}
                        ref={cpassRef}
                        onBlur={handleCpassBlur}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShowPass(p => ({...p, cpassword: !p.cpassword }))}  id={styles.icon_finger}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                {hasError.cpass && <span className='text-left px-1 text-red-500'>Password dosen't match</span>}
                <div className={areInputValid() ? styles.button : styles.button_disabled}>
                    <button type='submit' disabled={!areInputValid()}>Register</button>
                </div>
            </form>
            <p className='text-center text-gray-400'>
                Already have an account? <Link href='/login'><a className='text-blue-400'>Sign in</a></Link>
            </p>
        </section>
    )
}