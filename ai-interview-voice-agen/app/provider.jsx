"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { supabase } from "@/services/supabaseClient";
import React, { useContext, useEffect, useState } from "react";

function Provider({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
          if (session?.user) {
              CreateNewUser(session.user);
          }
      });
      return () => subscription.unsubscribe();
  }, [])

  const CreateNewUser = async (user) => {
      if (!user) return;

      // checking if the user information already exists
      let { data: Users, error } = await supabase
          .from('Users')
          .select('*')
          .eq('email', user?.email);

      console.log(Users);

      // if not found then create a new user
      if (Users?.length == 0) {
         const{data,error}= await supabase.from('Users')
         .insert([
             {
              name: user?.user_metadata?.name,
              email: user?.email,
              picture: user?.user_metadata?.picture,
             }
          ])
          console.log('User created:', data);
          setUser(data);
          return;
      }
      setUser(Users);
      
  };

  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailContext.Provider>
  )
}

export default Provider;

export const useUser =()=>{
    const context  = useContext(UserDetailContext);
    return context;
}