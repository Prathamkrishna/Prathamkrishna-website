// contains all image components for cretingpopup.js
import Image from 'next/image';
import image1 from '../public/assets/mainFN.png'
import image2 from '../public/assets/popup.png'
import image3 from '../public/assets/devtools.png'

function MainFnImage(){
    return <Image src={image1} width={1900} height={1000} />
}
function PopUpFn(){
    return <Image src={image2} width={1000} height={500} />
}
function DevTools(){
    return <Image src={image3} width={1000} height={1000} />
}

export {MainFnImage, PopUpFn, DevTools};

