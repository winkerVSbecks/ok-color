import { ReactNode } from 'react';

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="pa4 bg-black">{children}</div>
);
