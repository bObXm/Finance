import React from "react"
import CardInfo from "../Card/Card"



const CardList : React.FC = () : JSX.Element=> {
  return (
    <div>
        <CardInfo companyName='ceva' ticker="tsla" price={100}/>
        <CardInfo companyName='xxxx' ticker="neo" price={200}/>
    </div>
  )
}

export default CardList