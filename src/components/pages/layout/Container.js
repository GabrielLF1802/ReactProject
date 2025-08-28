import styles from './Container.module.css'
import { Outlet } from 'react-router-dom'

function Container (props){

    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}
        <Outlet/> {/* Lugar onde ' entra ' as páginas */}
        </div>
    )
}

export default Container