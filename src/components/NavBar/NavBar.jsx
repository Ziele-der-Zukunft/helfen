import { Navbar, Link } from './NavBar.styled';

const NavBar = () => {
  return (
    <Navbar>
      <Link to='/projekte'>Projekte</Link>
      <Link to='/projekte/bücher'>Bücher</Link>
    </Navbar>
  );
};
export default NavBar;