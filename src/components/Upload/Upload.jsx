import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

// eslint-disable-next-line react/prop-types
const Upload = ({setUploadedImage, uploadedImage}) => {
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
        <div>
            {uploadedImage === '' ? (
                <button
                    disabled={isDisabled}
                    className={`btn btn-primary ${isDisabled ? 'btn-disabled' : ''}`}
                    type="button"
                    onClick={uploadWidget}>
                    {isDisabled ? 'Opening Widget' : 'Upload Image'}
                </button>
            ) : (
                <div>
                    <img src={uploadedImage} alt="uploaded image" />
                    <button onClick={() => setUploadedImage('')}>
                        <Icon icon={'mdi:trash-outline'}/>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Upload;