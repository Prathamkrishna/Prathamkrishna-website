// contains all image components for cretingpopup.js
import Image from 'next/image';

function MainFnImage(){
    return (
        <Image src="../public/assets/mainFN.png" width={1900} height={1000} />
    )
}
function PopUpFn(){
    return (
        <Image src="../public/assets/popup.png" width={1900} height={1000} />
    )
}
function DevTools(){
    return (
        <Image src="../public/assets/devtools.png" width={1900} height={1000} />
    )
}

export {MainFnImage, PopUpFn, DevTools};

