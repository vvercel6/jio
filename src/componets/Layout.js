import Head from 'next/head';
import Heder from './Heder'
import { useEffect, useState } from 'react';

const Layout = ({ children, data }) => {
    const [facebookPixelScript, setFacebookPixelScript] = useState('');
    const [facebookPixelNoscript, setFacebookPixelNoscript] = useState('');
    const [facebookPixelID, setFacebookPixelID] = useState('');

    useEffect(() => {
        if (data?.FacebookPixel) {
            // Extract the content within <script> tags
            const match = data.FacebookPixel.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);
            const scriptContent = match ? match.join('') : '';

            // Remove <script> tags from the scriptContent
            const cleanedScript = scriptContent.replace(/<script>|<\/script>/gi, '');

            setFacebookPixelScript(cleanedScript);

            // Extract the content within <noscript> tags
            const noscriptMatch = data.FacebookPixel.match(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi);
            const noscriptContent = noscriptMatch ? noscriptMatch.join('') : '';

            setFacebookPixelNoscript(noscriptContent);

            // Extract FacebookPixelID from noscriptContent
            const idMatch = noscriptContent.match(/tr\?id=([0-9]+)/);
            const extractedID = idMatch ? idMatch[1] : '';

            setFacebookPixelID(extractedID);
        }
    }, [data?.FacebookPixel]);


    return (
        <>
            <Head>

                {facebookPixelScript && (
                    <script dangerouslySetInnerHTML={{ __html: facebookPixelScript }} />
                )}
            </Head>
            {children}
        </>
    );
};

export default Layout;
