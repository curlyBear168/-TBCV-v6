import React from 'react';
import styled from "styled-components";

export const StyledLogoXSmall = styled.img`
  width: 25px;
  @media (min-width: 767px) {
    width: 25px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-sticky" src="img/curlybearlogo.png" alt="sticky brand-logo" />
                    </a>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Collection <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/#" className="nav-link">Coming Soon</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Activity <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="https://gleam.io/w1YyY/free-bored-valentines-club-nft-giveaway" className="nav-link">FREE Bored Valentines NFT</a></li>
                            </ul>
                        </li>

                    </ul>
                    {/* Navbar Icons */}
                    <ul className="navbar-nav icons">
                        <li className="nav-item">

                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Action Button */}
                    <ul className="navbar-nav action">
                        <li  className="nav-item ml-3" ><a href="https://discord.gg/STByPkf2V2"  target={"_blank"}><StyledLogoXSmall src={"img/Discord.png"} /></a></li>
                        <li  className="nav-item ml-3"><a  href="https://www.instagram.com/boredvalentinesclub_nft/" target={"_blank"}><StyledLogoXSmall src={"img/IG.png"} /></a></li>
                        <li  className="nav-item ml-3" ><a  href="https://twitter.com/BoredValentines"  target={"_blank"}><StyledLogoXSmall src={"img/Twitter.png"} /></a></li>
{/*}
                        <li className="nav-item ml-3">
                            <a  className="btn ml-lg-auto btn-bordered-white" onClick={handleClickOpen}><i className="icon-wallet mr-md-2" />Wallet Connect</a>
    </li>*/}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;