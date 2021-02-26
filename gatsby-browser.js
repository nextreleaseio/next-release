require('prismjs/themes/prism-tomorrow.css');
const addScript = url => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
};

export const onClientEntry = () => {
    window.onload = () => {
        addScript('//embed.redditmedia.com/widgets/platform.js');
    };
};
