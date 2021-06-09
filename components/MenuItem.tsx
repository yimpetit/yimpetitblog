import * as React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

interface MenuProps {
  title:string;
  url:string;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness:1000, velocity:-100}
    }
  },
  closed: {
    y: 50,
    opacity:0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const MenuItem:React.FC<MenuProps> = ({title, url}) => {
  return (
    <motion.li
      className="nav-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={url}><a className="text-lg font-black text-white transition hover:text-blue-400">{title}</a></Link>
    </motion.li>
  );
}