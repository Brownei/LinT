import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { ActionIcon } from '@mantine/core';


// eslint-disable-next-line react/prop-types
const Upload = ({setUploadedImage, uploadedImage, styles}) => {
    const cloudName = import.meta.env.VITE_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
    const [loaded, setLoaded] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const processResults = (error, result) => {
        if (result.event === 'close') {
            setIsDisabled(false);
        }
        if (result && result.event === 'success') {
            const secureUrl = result.info.secure_url;
            const previewUrl = secureUrl.replace(
                '/upload/',
                '/upload/w_400/f_auto,q_auto/'
            );
            setUploadedImage(previewUrl);
            setIsDisabled(false);
        }
        if (error) {
            setIsDisabled(false);
        }
    };
    
    const uploadWidget = () => {
        setIsDisabled(true);
        window.cloudinary.openUploadWidget({
            cloudName,
            uploadPreset,
            sources: ['local', 'url'],
            clientAllowedFormats: ['image'],
            resourceType: 'image',
        }, processResults);
    };

    useEffect(() => {
        const uwScript = document.getElementById('uw');
        if (!loaded && !uwScript) {
            const script = document.createElement('script');
            script.setAttribute('async', '');
            script.setAttribute('id', 'uw');
            script.src = 'https://upload-widget.cloudinary.com/global/all.js';
            script.addEventListener('load', () => setLoaded(true));
            document.body.appendChild(script);
        }
    }, [loaded]);

    return (
        <div className={styles}>
            {uploadedImage === '' ? (
                <ActionIcon
                    variant='default'
                    disabled={isDisabled}
                    className={`btn`}
                    type="button"
                    onClick={uploadWidget}>
                    {isDisabled ? <Icon className='spinner' icon={'formkit:spinner'} fontSize={24}/> : <Icon icon={'fluent:camera-add-48-regular'} fontSize={24}/>}
                </ActionIcon>
            ) : (
                <div className='viewed-image'>
                    <img src={uploadedImage} alt="uploaded image" />
                    <ActionIcon variant='default' onClick={() => setUploadedImage('')}>
                        <Icon icon={'bi:trash-fill'} color='#ff6347' fontSize={24}/>
                    </ActionIcon>
                </div>
            )}
        </div>
    );
};

export default Upload;
