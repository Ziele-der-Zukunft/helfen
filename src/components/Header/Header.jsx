import {HeaderComponent} from "./Header.styled"
import Navbar from "components/Header/NavBar/NavBar";
import LangBar from "components/Header/LangBar/LangBar";

const Header = () => {
    return (
      <HeaderComponent>
        <Navbar />
        {/* <NavBar />
        {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        <LangBar />
      </HeaderComponent>
    );
  };
  export default Header;