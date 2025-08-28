import styles from './Container.module.css'
import { Outlet } from 'react-router-dom'

function Container (props){

    return(
        <div className={`${styles.Container} ${styles[props.customClass]}`}>{props.children}
        <Outlet/>
        </div>
    )
}

export default Container