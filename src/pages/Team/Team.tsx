import { useContext, useEffect } from 'react'
import styles from './Team.module.scss'
import { MyContext } from '../../layouts/MainLayout/MainLayout'

export const Team = () => {
  const { isLightTheme } = useContext(MyContext)

  return (
    <div className={isLightTheme ? styles.LightTeam : styles.DarkTeam}>
      <p>Руководство МП “Название”</p>
      <p>Директор ФИО фото</p>
      <p>Бухгалтер МП: ФИО, емейл для связи и уточнений по взаиморасчетам:</p>
      <p>Главный инженер: ФИО</p>
    </div>
  )
}
