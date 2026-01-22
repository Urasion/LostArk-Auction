'use client';
import {
  AppRouterContext,
  AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';

type StorybookRouterProps = {
  children: React.ReactNode;
  action?: (url: string) => void;
};

export const StorybookRouter = ({
  children,
  ...props
}: StorybookRouterProps) => {
  const router: AppRouterInstance = {
    back: () => alert('Triggered router.back()'),
    forward: () => alert('Triggered router.forward()'),
    push: (href) => {
      alert(`Triggered router.push(${href})`);
      props.action?.(href);
    },
    replace: (href) => {
      alert(`Triggered router.replace(${href})`);
      props.action?.(href);
    },
    refresh: () => alert('Triggered router.refresh()'),
    prefetch: () => {},
  };

  return (
    <AppRouterContext.Provider value={router}>
      {children}
    </AppRouterContext.Provider>
  );
};
