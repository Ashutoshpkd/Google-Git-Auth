import Link from 'next/link';
import styles from './login.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState, useRef } from 'react';
import { signIn } from "next-auth/react";
import { isEmailValid, isPasswordValid } from '../../helpers/validation';

export default function Login(){
    const [showPass, setShowPass] = useState(false);
    const [hasError, setHasError] = useState({ email: false, password: false });
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signIn('google', {
            callbackUrl: '/'
        })
    };

    const handleGithubSignIn = (e) => {
        e.preventDefault();
        signIn('github', {
            callbackUrl: '/',
        });
    };

    const handleEmailBlur = () => {
        const isValidEmail = isEmailValid(emailRef.current.value);
        setHasError(e => ({ ...e, email: !isValidEmail }));
    };

    const submitHander = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

    }

    return (
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className='title'>
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
                <p className='w-3/4 mx-auto text-gray-400'>My name is Ashutosh</p>
            </div>
            <form className='flex flex-col gap-5' onSubmit={submitHander}> 
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
                        type={showPass ? 'text' : 'password'}
                        name='password'
                        placeholder='Password'
                        className={styles.input_text}
                        ref={passwordRef}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShowPass(p => !p)} id={styles.icon_finger}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                <div className={hasError.email ? styles.button_disabled : styles.button} disabled={hasError.email}>
                    <button type='submit'>Login</button>
                </div>
                <div className='input-button'>
                    <button type='button' className={styles.button_custom} onClick={handleGoogleSignIn}>
                        Sign in with Google
                        <Image src={'/assets/google.svg'} width={20} height={20}/>
                    </button>
                </div>
                <div className='input-button'>
                    <button type='button' className={styles.button_custom} onClick={handleGithubSignIn}>
                        Sign in with Github
                        <Image src={'/assets/github.svg'} width={25} height={25}/>
                    </button>
                </div>
                <p className='text-center text-gray-400'>
                    don't have an account yet? <Link href='/register'><a className='text-blue-400'>Sign up</a></Link>
                </p>
            </form>
        </section>
    )
}