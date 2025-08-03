"use client";
import React from 'react';
import logo from '../../public/image.png';
import login from '../../public/login.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { supabase } from '@/services/supabaseClient';

function Login() {
    // Function to handle Google sign-in
    const signinwithgoogle = async()=>{
        const {error}=await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        if(error){
            console.log('Error signing in:', error);
        }
    }
    return (
        <div className='flex flex-col items-center justify-center  h-screen'>
            <div className='flex flex-col items-center border rounded-2xl p-8'>
                <Image 
                    src={logo} 
                    alt='logo'
                    width={200}
                    height={70}
                    className='w-[180px]' // Also fixed the typo here
                />

                <div className='flex flex-col items-center'>
                    <Image 
                        src={login}
                        width={600}
                        height={400}
                        alt='login'
                        className='w-[400px] h-[250px] rounded-2xl'
                    />
                    <h2 className='mt-5 text-2xl font-bold text-center'>Welcome to Eval AI</h2>
                <p className='text-center text-gray-500'>Sign In with Google authentication</p>
                <Button className='mt-7 w-full' onClick={signinwithgoogle}>Login with google</Button>
                </div>
                
            </div>
        </div>
    );
}

export default Login;