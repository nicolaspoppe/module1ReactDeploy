import logo from './LOGO_HE_VINCI.png';

const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
        <img src={logo} alt="Logo Haute École Léonard De Vinci" />;
      </>
    )
  }

export default Header;