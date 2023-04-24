import Link from 'next/link';
import styles from './login.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';

export default function Login(){
    const [showPass, setShowPass] = useState(false);
    return (
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className='title'>
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
                <p className='w-3/4 mx-auto text-gray-400'>My name is Ashutosh</p>
            </div>
            <form className='flex flex-col gap-5'> 
                <div className={styles.input_group}>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4">
                        <HiAtSymbol size={25}/>
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                        type={showPass ? 'text' : 'password'}
                        name='password'
                        placeholder='Password'
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShowPass(p => !p)} id={styles.icon_finger}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                <div className={styles.button}>
                    <button type='submit'>Login</button>
                </div>
                <div className='input-button'>
                    <button type='button' className={styles.button_custom}>
                        Sign in with Google
                        <Image src={'/assets/google.svg'} width={20} height={20}/>
                    </button>
                </div>
                <div className='input-button'>
                    <button type='submit' className={styles.button_custom}>
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