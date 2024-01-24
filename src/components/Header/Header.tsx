import { useContext } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { MyContext } from '../../layouts/MainLayout/MainLayout'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const navbarLinks = [
  { title: 'Команда', url: '/' },
  { title: 'Тарифы', url: '/rates' },
  { title: 'О нас', url: '/about_us' },
  { title: 'Новости', url: '/news' },
  { title: 'Контакты', url: '/contact' },
]

export const Header = () => {
  const { isLightTheme } = useContext(MyContext)
  return (
    <header className={isLightTheme ? styles.LightHeader : styles.DarkHeader}>
      <div>
        <Link to='/'>
          <img
            className="w-20"
            src="https://etalon.billing.mycloud.kg/test/logo/kenesh_logo_1.png"
            alt="Logo"
          />
        </Link>
      </div>
      <Navbar links={navbarLinks} />
    </header>
  )
}
