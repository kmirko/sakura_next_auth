'use client';

import { useRef } from 'react';
import { signIn } from 'next-auth/react';

export default function Home() {
  const userName = useRef('');
  const pass = useRef('');

  const onSubmit = async () => {
    const result = await signIn('credentials', {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input
          type='text'
          placeholder='userName'
          onChange={(e) => (userName.current = e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='pass'
          onChange={(e) => (pass.current = e.target.value)}
        />
        <br />
        <button onClick={onSubmit}>Log In</button>
      </form>
    </div>
  );
}
