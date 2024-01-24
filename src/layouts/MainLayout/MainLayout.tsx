import { Header } from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import styles from './MainLayout.module.scss'
import { createContext, useState } from 'react'

const footerLinks = [
  { title: 'Личный кабинет', url: '/private' },
  { title: 'Документы', url: '/docs' },
  { title: 'Передать показания', url: 'meter_readings' },
  { title: 'Вакансии', url: '/vacancies' },
  { title: 'Контакты', url: '/contact' },
  { title: 'Как оплатить', url: '/payment' },
]

const checkTime = () => {
  const dayTime = new Date().getHours()

  if (dayTime >= 7 && dayTime <= 18) return true
  else return false
}

export const MyContext = createContext({
  isLightTheme: checkTime(),
  onThemeChanged: () => {},
})

export const MainLayout = () => {
  const [isLightTheme, setIsLightTheme] = useState(() => checkTime())

  const onThemeChanged = () => {
    setIsLightTheme(!isLightTheme)
  }

  return (
    <div className={isLightTheme ? styles.LightMainLayout : styles.DarkMainLayout}>
      <MyContext.Provider value={{ isLightTheme, onThemeChanged }}>
        <Header />
        <Outlet />
      </MyContext.Provider>
      <Footer links={footerLinks} />
    </div>
  )
}
