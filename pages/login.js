import Head from 'next/head'
import Layout from '../layout/layout'
import LoginForm from '../components/login/login';

export default function Login(){
    return (
        <Layout>
        <Head>
            <title>Login</title>
        </Head>
        <LoginForm />
        </Layout>
    )
}