import React from "react";
import styles from './Detail.module.css'

import {RouteComponentProps} from 'react-router-dom'

interface MatchParams{
  touristRouteId:string
}

const Detail:React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return (
    <h1>路线详情页面,路线id：{props.match.params.touristRouteId}</h1>
  )
}

export default Detail;