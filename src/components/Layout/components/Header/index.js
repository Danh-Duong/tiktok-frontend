import { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAfrica, faEarthAsia, faCircleQuestion, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from "~/assets/images";
import styles from "./Header.module.scss"
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

// giúp sử dụng CSS đối với các tên như: post-item
const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "Tiếng Việt"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts"
    },
]

function Header() {

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);


    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <img src={images.logo} alt="Tiktok" />
            <Tippy
                interactive

                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>

                <Menu items={MENU_ITEMS}>
                    <button className={cx("more-btn")}><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                </Menu>

            </div>
        </div>
    </header >
}

export default Header;