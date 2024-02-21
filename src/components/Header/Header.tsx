import Image from "next/image";
import logo from "./logo.png";
import { HeaderMain } from "./header.styled";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const Header = () => {
  const session = useSession();
  const router = useRouter();
  const [autorize, setAtorize] = useState(false);
  return (
    <HeaderMain className={poppins.className}>
      <div className="search-section">
        <button onClick={() => router.push("/")}>
          <Image src="/logo.svg" alt="logo1" width={88} height={46} />
        </button>
        <div className="search-container">
          <p>Catalog</p>
          <div className="input-con-search-container">
            <button className="btn btn-input">
              <Image src="/Search.svg" alt="logo1" width={24} height={24} />
            </button>
            <input className="input" type="text" placeholder="Search" />
          </div>
        </div>
        {session.data ? (
          <div className="user-buttons">
            <button>
              <Image
                className="cart-img"
                src="/cart/Cart.svg"
                width={26}
                height={26}
                alt="cart"
              />
            </button>
            <button>
              <Image
                src="/card/liked.svg"
                width={48}
                height={48}
                alt="liked of User"
              />
            </button>
            <button onClick={() => router.push("/profile")}>
              <Image
                src="/cart/userprofile.svg"
                width={48}
                height={48}
                alt="profile"
              />
            </button>
          </div>
        ) : (
          <div className="btn-login-con">
            <button
              className="btn-login"
              onClick={() => router.push("/authorization/login")}
            >
              Log In/
            </button>
            <button
              className="btn-login"
              onClick={() => router.push("/authorization/registration")}
            >
              Sing Up
            </button>
          </div>
        )}
      </div>
    </HeaderMain>
  );
};

export { Header };
