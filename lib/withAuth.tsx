"use client"

import { checkIsAuthenticated } from '@/lib/checkIsAuthenticated';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const isAuthenticated = await checkIsAuthenticated();
        if (!isAuthenticated) {
          router.push('/');
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
