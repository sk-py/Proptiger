import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <>
        <div id='home'></div>
<nav>

<h1><span className='P'>P</span>roptiger</h1>
<main>
    <HashLink to={"/#home"}>Home</HashLink>
    <Link to={"/Contact"}>Enquire</Link>
    <HashLink to={"/#about"}>About</HashLink>
    <HashLink id='soc' to={"/#socials"}>Socials</HashLink>
    <HashLink to={"/#connectw"}>Connect</HashLink>
</main>
</nav>

</>

);
};

export default Header;