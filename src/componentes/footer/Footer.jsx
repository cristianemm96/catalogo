import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start fixed-bottom">
        <div
          className="text-center p-3 text-white"
          style={{backgroundColor:"#343a40"}}
        >
          © 2023 Copyright: 
          <a className="text-white" href="https://github.com/cristianemm96">
          &nbsp;CM
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
