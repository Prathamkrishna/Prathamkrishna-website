// contains all image components for cretingpopup.js
import Image from 'next/image';
import image1 from '../public/assets/mainFN.png'
import image2 from '../public/assets/popup.png'
import image3 from '../public/assets/devtools.png'
import { Suspense } from 'react';

function MainFnImage(){
    return (
        <Suspense fallback={LoadingComponent}>
            <Image src={image1} width={1900} height={1000} />
        </Suspense>
    )
}
function PopUpFn(){
    return (
        <Suspense fallback={LoadingComponent}>
            <Image src={image2} width={1900} height={1000} />
        </Suspense>
    )
}
function DevTools(){
    return (
        <Suspense fallback={LoadingComponent}>
            <Image src={image3} width={1900} height={1000} />
        </Suspense>
    )
}

function LoadingComponent(){
    return(
        <div style={{color: 'white'}}>Loading</div>
    )
}

export {MainFnImage, PopUpFn, DevTools};

