import './MobileHeader.scss';
import { Badge, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";

const MobileHeader = () => {
    return (
        <div id='mobile-header'>
            <h1>Collaborate</h1>
            <div className='buttons'>
                <div className="mobile-chats">
                    <NavLink to={'/collaborate/interests'} className='link'>
                        <Badge color="#00034A" size="xs" circle>5</Badge>
                        Interest
                    </NavLink>

                    <NavLink to={'collaborate/chats'} className='link'>
                        <Badge color="#00034A" size="xs" circle>3</Badge>
                        Chats
                    </NavLink>
                </div>

                <NavLink to={'/collaborate/create-post'}>
                    <Button color="#0006B1" style={{ borderRadius: '8px' }}>Share your Idea</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default MobileHeader