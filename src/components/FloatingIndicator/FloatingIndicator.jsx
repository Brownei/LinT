/* eslint-disable react/prop-types */
import './FloatingIndicator.scss'
import { useState } from 'react';
import { FloatingIndicator as FloatingIndicatorElement, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function FloatingIndicator({data}) {
    const [rootRef, setRootRef] = useState(null);
    const [controlsRefs, setControlsRefs] = useState({});
    const [active, setActive] = useState(0);

    const setControlRef = (index) => (node) => {
        controlsRefs[index] = node;
        setControlsRefs(controlsRefs);
    };

    const controls = data?.map((item, index) => (
        <Link to={item.url} key={index}>
            <UnstyledButton
                className='control'
                ref={setControlRef(index)}
                onClick={() => setActive(index)}
                mod={{ active: active === index }}
            >
                <span className='controlLabel'>{item.name}</span>
            </UnstyledButton>
        </Link>
    ));

    return (
        <div className='root' ref={setRootRef}>
            {controls}

            <FloatingIndicatorElement
                target={controlsRefs[active]}
                parent={rootRef}
                className='indicator'
            />
        </div>
    );
}