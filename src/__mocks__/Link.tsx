import React from 'react';

export default function Link({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
  return <a href={to} className={className}>{children}</a>;
}
