import Image from "next/image";
import logo from "./logo.png";
import { HeaderMain } from "./header.styled";

const Header = () => {
  return (
    <HeaderMain>
      <div className="search-section">
        <Image src="/logo.svg" alt="logo1" width={88} height={46} />
        <div className="search-container">
          <p>Catalog</p>
          <div>
            <button className="btn btn-input">
              <Image src="/Search.svg" alt="logo1" width={24} height={24} />
            </button>
            <input className="input" type="text" placeholder="Search" />
          </div>
        </div>
        <button className="btn btn-login">Log In/ Sing Up</button>
      </div>
      <div className="banner-header">
        <Image src="/banner.png" alt="banner" width={1280} height={400} />
      </div>
    </HeaderMain>
  );
};

export { Header };
