// contains all image components for cretingpopup.js
import Image from 'next/image';
import { lazy, Suspense } from 'react';
import image1 from '../public/assets/mainFN.png'
import image2 from '../public/assets/devtools.png'
import image3 from '../public/assets/popup.png'

// const image1 = lazy(() => import('../public/assets/mainFN.png'))
// const image2 = lazy(() => import('../public/assets/devtools.png'))
// const image3 = lazy(() => import('../public/assets/popup.png'))

const Profile = () => {
    return (<p>Loading</p>)
}

function MainFnImage(){
    const isServer = typeof window === "undefined";
  return isServer ? (
    <Profile />) :
    (
        <Suspense fallback={<LoadingComponent />}>
            <Image src={image1} width={1900} height={1000} />
        </Suspense>
    )
}
function PopUpFn(){
    const isServer = typeof window === "undefined";
  return isServer ? (
    <Profile />) :
    (
        <Suspense fallback={<LoadingComponent />}>
            <Image src={image2} width={1900} height={1000} />
        </Suspense>
    )
}
function DevTools(){
    const isServer = typeof window === "undefined";
  return isServer ? (
    <Profile />) :
    (
        <Suspense fallback={<LoadingComponent />}>
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

