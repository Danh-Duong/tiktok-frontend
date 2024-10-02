import classNames from "classnames/bind";
import styles from "./Header.module.scss"

// giúp sử dụng CSS đối với các tên như: post-item
const cx = classNames.bind(styles)

function Header() {
    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>

        </div>
    </header>
}

export default Header;