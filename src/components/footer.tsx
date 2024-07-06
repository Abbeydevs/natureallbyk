import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 p-4 pt-20 lg:px-16 bg-black text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold">NatureAll By K</h1>
          <p className="text-muted-foreground">
            NatureAll By K produce natural products to make your hair better and
            treat hair diseases. With our products you can start caring for your
            skin the right way.{" "}
          </p>
          <div className="mt-8">
            <p className="text-green-300">Follow us on:</p>
            <div className="flex items-start justify-start gap-5 mt-2">
              <Link href="/">
                <FaFacebook />
              </Link>
              <Link href="/">
                <FaXTwitter />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-8">
          <Link href="/" className="hover:text-green-300">
            <p>Privacy Policy</p>
          </Link>
          <Link href="/" className="hover:text-green-300">
            <p>Terms & Conditions</p>
          </Link>
          <Link href="/" className="hover:text-green-300">
            <p>FAQs</p>
          </Link>
        </div>
      </div>
      <div className="pb-5 pt-10 text-muted-foreground">
        <p>
          &copy; Copyright 2024. All rights reserved. Developed by{" "}
          <Link href="/" className="hover:text-green-300">
            Abbeydev
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
