import Image from "next/image";
import Link from "next/link";
import { FooterMain } from "./footer.styled";
const Footer = () => {
  return (
    <FooterMain>
      <div className="contacts">
        <Image src="/logoDark.png" alt="logo1" width={88} height={46} />
        <div>
          <span>tranthuy.nute@gmail.com</span>
          <span>(480) 555-0103</span>
        </div>
      </div>
      <div className="nav-footer">
        <nav>
          <ul>
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <Link href="/">Catalog</Link>
            </li>
            <li>
              <Link href="/">My Account</Link>
            </li>
            <li>
              <Link href="/">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="map-footer">
        <span>6391 Elgin St. Celina, Delaware 10299</span>
        <Image src="/map.png" alt="our Map" width={413} height={160} />
      </div>
    </FooterMain>
  );
};

export { Footer };
