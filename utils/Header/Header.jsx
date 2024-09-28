import Link from "next/link"
import { Logo } from "../Logo/Logo"
import styles from "./Header.module.scss";

const linksList = [
  {
    "name": "Home",
    "link": "/",
    "isAnchor": false
  },
  {
    "name": "Clement",
    "link": "#clement",
    "isAnchor": true,
    "page": "/"
  },
  {
    "name": "FAQ",
    "link": "/faq",
    "isAnchor": false
  },
  {
    "name": "Medium",
    "link": "blog",
    "isAnchor": false
  }
]

const Header = () => {
  return (
    <header className={styles.header}>
    <Logo className="header__logo" />

    <div className="header__wrapper">
      <ul className="header__list-links">
        {linksList.map((currLink, index) => (
          <li key={`header_link_${index}`}>            
            <Link className="header__link" to={currLink.link}>
              <span>{currLink.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </header>
  )
}

export default Header