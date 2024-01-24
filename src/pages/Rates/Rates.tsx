import { useContext } from 'react'
import styles from './Rates.module.scss'
import { MyContext } from '../../layouts/MainLayout/MainLayout'

export const Rates = () => {
  const { isLightTheme } = useContext(MyContext)

  return (
    <div className={styles.LightRates}>
      <p className={(isLightTheme ? 'text-black' : 'text-slate-200') + ' text-xl'}>
        Тарифы на услуги МП “Название МП”, утвержденные и действующие с ДД.ММ.ГГГГ г.
      </p>

      <div className={isLightTheme ? styles.LightRatesContent : styles.DarkRatesContent}>
        <div className="w-2/4">
          <h2>Физические лица</h2>
          <div
            className={isLightTheme ? styles.LightRatesContentBody : styles.DarkRatesContentBody}
          >
            • Со счетчиком: ХХ сом за м³
            <br />• Без счетчика: ХХ сом за 1 проживающего
          </div>
        </div>
        <div className="w-2/4">
          <h2>Юридические лица</h2>
          <div
            className={isLightTheme ? styles.LightRatesContentBody : styles.DarkRatesContentBody}
          >
            • Со счетчиком: ХХ сом за м³
            <br />
            • Без счетчика: ХХ сом за 1 проживающего
            <br />• ХХ сом за м² \ м³
          </div>
        </div>
      </div>

      <p className={(isLightTheme ? 'text-black' : 'text-slate-200') + ' text-lg leading-5 font-medium'}>
        При изменении тарифицируемых параметров абоненты должны написать заявление об этом с
        указанием периода, с которого произошло изменение (изменененные тарифы применяются с нового
        биллингового периода).
      </p>
      <p className={(isLightTheme ? 'text-black' : 'text-slate-200') + ' text-lg my-6 leading-5 font-medium'}>
        К заявлению необходимо приложить подтверждающие документы.
      </p>
    </div>
  )
}
