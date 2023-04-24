import Link from 'next/link';
import styles from './register.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';

export default function Register(){
    const [showPass, setShowPass] = useState({ password: false, cpassword: false });
    return (
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className='title'>
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                <p className='w-3/4 mx-auto text-gray-400'>My name is Ashutosh</p>
            </div>
            <form className='flex flex-col gap-5'>
                <div className={styles.input_group}>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4">
                        <HiOutlineUser size={25}/>
                    </span>
                </div>
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
                        type={showPass.password ? 'text' : 'password'}
                        name='password'
                        placeholder='Password'
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShowPass(p => ({...p, password: !p.password }))} id={styles.icon_finger}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                        type={showPass.cpassword ? 'text' : 'password'}
                        name='cpassword'
                        placeholder='Confirm Password'
                        className={styles.input_text}
                    />
                    <span className="icon flex items-center px-4" onClick={() => setShowPass(p => ({...p, cpassword: !p.cpassword }))}  id={styles.icon_finger}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                <div className={styles.button}>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <p className='text-center text-gray-400'>
                Already have an account? <Link href='/login'><a className='text-blue-400'>Sign in</a></Link>
            </p>
        </section>
    )
}