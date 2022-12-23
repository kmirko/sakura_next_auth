'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AppBar() {
  const { data: session } = useSession();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-araund',
        alignItems: 'center',
        background: 'blue',
        width: '100vw',
        height: '80px',
        color: '#fff',
      }}
    >
      <div>
        <Link style={{ color: '#fff' }} href='/'>
          HOME
        </Link>
      </div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-araund',
          alignItems: 'center',
          listStyle: 'none',
        }}
      >
        <li>
          <Link
            style={{ padding: '0 10px', color: '#fff', textDecoration: 'none' }}
            href='/admin'
          >
            ADMIN
          </Link>
        </li>
        <li>
          <Link
            style={{ padding: '0 10px', color: '#fff', textDecoration: 'none' }}
            href='/admin/panel'
          >
            PANEL
          </Link>
        </li>
        {!session?.user ? (
          <li>
            <Link
              style={{
                padding: '0 50px',
                color: '#fff',
                textDecoration: 'none',
              }}
              href='/auth/login'
              onClick={() => signIn()}
            >
              Log In
            </Link>
          </li>
        ) : (
          <li>
            <Link
              style={{
                padding: '0 20px',
                color: '#fff',
                textDecoration: 'none',
              }}
              href='/logout'
              onClick={() => signOut()}
            >
              Log Out
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
