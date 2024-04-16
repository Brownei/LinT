/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const LinkIcons = ({ link, styles }) => {
    let icon;
    switch (true) {
        case link.includes('https://twitter.com'):
            icon = <Icon icon={'mdi:twitter'} fontSize={24}/>
            break;
        case link.includes('https://www.linkedin.com'):
            icon = <Icon icon={'mdi:linkedin'} fontSize={24}/>
            break;
        case link.includes('https://github.com'):
            icon = <Icon icon={'mdi:github'} fontSize={24}/>
            break;
        case link.includes('https://web.facebook.com'):
            icon = <Icon icon={'ic:baseline-facebook'} fontSize={24}/>
            break;
        case link.includes('https://www.behance.net'):
            icon = <Icon icon={'basil:behance-solid'} fontSize={24}/>
            break;
        default:
            icon = <Icon icon={'ph:globe-light'} fontSize={24}/>
            break;
    }

    return (
        <Link className={styles} to={link} target="_blank">{icon}</Link>
    )
}

export default LinkIcons