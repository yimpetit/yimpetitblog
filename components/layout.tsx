import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Container } from 'next/app';
import { motion, useCycle } from "framer-motion";
import MenuToggle from './MenuToggle';
import { useDimensions } from "./use-dimensions";
import Nav from "./Nav";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


const Layout: React.FC = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="wrap">
      <Head>
        <title>Yimpetit's Blog</title>
      </Head>
      <header className="px-6 py-3 flex flex-row justify-between border-b">
        <Link href="/">
          <a className="flex flex-row items-center">
            <Image
              src="/img/logo.png"
              height={30}
              width={30}
              alt="Y"
            />
            <span className="ml-3 text-xl font-medium text-gray-600">Yimpetit's Blog</span>
          </a>
        </Link>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar}/>
          <Nav />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </header>
      {children}
    </div>
  )
};

export default Layout;
