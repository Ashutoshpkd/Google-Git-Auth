import Head from 'next/head';
import Layout from '../layout/layout';
import RegisterForm from '../components/register/register';

export default function Register(){
    return (
    <Layout>
        <Head>
            <title>Register</title>
        </Head>
        <RegisterForm />
    </Layout>
    )
}