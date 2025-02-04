
import Filters from "../Filters/Filters";
import css from './Sales.module.css'
import {useState, useEffect} from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import * as salesService from '../../services/salesService'

const Sales = () =>  {
  const[loanSales, setLoanSales] = useState()
  const[cashSales, setCashSales] = useState()
  const[filter, setFilter] = useState()

  useEffect(() => {
    salesService.getTransactionTotal()
    .then(res => {
      setLoanSales(res[1])
      setCashSales(res[2])
    })
  },[])

  useEffect(() => {
    salesService.getTransactionTotal()
    .then(res => {
      setLoanSales(res[1])
      setCashSales(res[2])
    })
  },[filter])

  return (
    <>
     

      <div className={css.piechartcontainer}>
        <div className={css.piechart}>
          <PieChart
            data={[
              { title: 'Cash', value: loanSales, color: '#E38627' },
              { title: 'Loan', value: cashSales, color: '#C13C37' },
            ]}
            startAngle={270}
            animate={true}
            animationDuration={2000}
            labelStyle={css}

          />
        </div>
      </div>
    <Filters />
    </>
  )
}

export default Sales;
