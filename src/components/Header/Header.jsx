import {HeaderComponent} from "./Header.styled"
import Navbar from "components/NavBar/NavBar";

const Header = () => {
    return (
      <HeaderComponent>
        <Navbar />
        {/* <NavBar />
        {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </HeaderComponent>
    );
  };
  export default Header;