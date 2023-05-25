import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
// in styles stecken jetzt alle Css-Klassen 
// (inklusive angehängter, eindeutiger "id" als suffix)

const Header = ({size}) => {
  console.log("styles", styles)

  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };


  return (
    <header style={headerStyle} className={styles.header}>
      <h1>todo</h1>
      <p>Items werden in localStorage gespeichert</p>
    </header>
  )

}



export default Header;