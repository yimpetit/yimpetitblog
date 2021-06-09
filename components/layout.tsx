import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion, useCycle } from "framer-motion";
import MenuToggle from './MenuToggle';
import { useDimensions } from "./use-dimensions";
import Nav from "./Nav";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at 0px 0px)`,
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 100,
      damping: 40
    }
  }),
  closed: {
    clipPath: "circle(3px at 10px 15px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const nav = {
  open: { left: '0' },
  closed: {left: '-300px'}
}


const Layout: React.FC = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="wrap">
      <Head>
        <title>Yimpetit's Blog</title>
      </Head>
      <motion.header className="px-6 py-3 flex flex-row justify-between border-b" animate={isOpen ? "open" : "closed"}>
        <Link href="/">
          <a className="flex flex-row items-center">
            <img src="/img/logo.png" className="w-6" alt="yimpetit"/>
            <span className="ml-3 text-xl font-medium text-gray-600">Yimpetit's Blog</span>
          </a>
        </Link>
        <ul className="flex hidden lg:flex">
          <li><Link href="/"><a className="text-lg font-black text-gray-400 transition hover:text-blue-400">소개</a></Link></li>
          <li className="ml-5"><Link href="/blog"><a className="text-lg font-black text-gray-400 transition hover:text-blue-400">블로그</a></Link></li>
          <li className="ml-5"><Link href="/etc"><a className="text-lg font-black text-gray-400 transition hover:text-blue-400">인터랙티브</a></Link></li>
        </ul>
        <MenuToggle toggle={() => toggleOpen()} />
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="lg:hidden"
          variants={nav}
        >
          <motion.div className="background" variants={sidebar}/>
          <Nav />
        </motion.nav>
      </motion.header>
      {children}
    </div>
  )
};

export default Layout;
