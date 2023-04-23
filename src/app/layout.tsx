import { FC, PropsWithChildren } from 'react';
import { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: 'Mildo',
  description: 'Quality is more important'
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
