import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren:0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const navItem = [
  {
    name : '소개',
    url : '/'
  },
  {
    name : '블로그',
    url : '/blog'
  },
  {
    name : '인터랙티브',
    url : '/interactive'
  },
  {
    name : '스택',
    url : '/stack'
  }
];

const Navigation = () => (
  <motion.ul variants={variants} className="nav-ul">
    {navItem.map(i => (
      <MenuItem title={i.name} url={i.url} key={i.name} />
    ))}
  </motion.ul>
);

export default Navigation;