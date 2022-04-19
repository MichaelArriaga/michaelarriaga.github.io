import React, { ReactNode, useState } from "react";
import ReusableHelmet from "../ReusableHelmet";
import HeroHeader from "../general/HeroHeader";
import Footer from "../Footer";
import EmailListSignupForm from "../email_lists/EmailListSignupForm";
import twitter_icon from "../../../static/etc/images/icons/logo-twitter.png";
import linkedin_icon from "../../../static/etc/images/icons/logo-linkedin.png";
import github_icon from "../../../static/etc/images/icons/logo-github.png";
import email_icon from "../../../static/etc/images/icons/logo-email-envelope.png";

interface PropTypes {
  children: ReactNode;
  meta_title: string;
  meta_description: string;
  highlighted_hero_link: string;
}

const SidebarLayout = ({
  meta_title,
  meta_description,
  highlighted_hero_link,
  children,
}: PropTypes) => {
  return (
    <div>
      <ReusableHelmet title={meta_title} description={meta_description} />
      <div
        style={{ minWidth: 300, height: "100vh", minHeight: "100vh" }}
        className="w-full sm:flex sm:flex-row sm:justify-start items-start"
      >
        {/* left panel start */}
        <div
          style={{ width: 350, height: "100vh", minHeight: "100vh" }}
          className="hidden sm:block w-64 mr-4 border-r border-gray-400"
        >
          <div style={{ marginTop: 45 }}></div>
          <div style={{ marginBottom: -20 }}>
            <HeroHeader highlighted={highlighted_hero_link} />
          </div>

          <div className="mb-4">
            {/* socials start */}
            <div className="flex flex-row justify-center items-center mb-6">
              <a
                href="https://twitter.com/mike_ray_ux"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={twitter_icon}
                  alt=""
                  style={{ width: 25 }}
                  className="mr-2"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mike-ray-26a874230/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin_icon}
                  alt=""
                  style={{ width: 25 }}
                  className="mr-2"
                />
              </a>
              <a
                href="https://github.com/MichaelArriaga"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github_icon}
                  alt=""
                  style={{ width: 25 }}
                  className="mr-2"
                />
              </a>
              <a href="mailto:m.arriaga.smb@gmail.com">
                <img
                  src={email_icon}
                  alt=""
                  style={{ width: 25 }}
                  className=""
                />
              </a>
            </div>
            {/* socials end */}
            <EmailListSignupForm />
            <div className="w-full mb-4"></div>
          </div>
        </div>
        {/* left panel end */}

        {/* right panel content start */}
        <div
          style={{ maxWidth: 600 }}
          className="w-full flex flex-col justify-start items-center sm:pl-5 sm:max-w-screen-sm mb-3 mt-10 "
        >
          <div className="w-full sm:hidden">
            <HeroHeader highlighted={highlighted_hero_link} />
          </div>
          {children}
        </div>
        {/* right panel content end */}
      </div>
      <Footer />
    </div>
  );
};

export default SidebarLayout;