import React from 'react'
import './tools.css'

const ReactCardSlider = (props) => {
    // const swift = new URL('',import.meta.url)
    const slides = [1, 2, 3, 4];
    return (
        <div id="main-slider-container">
            {/* <div id="slider">
            
                {slides.map((slide, index)=>{
                    return(
                        <>
                        <div className="slider-card">

                        </div>
                        </>
                    )
                })}
                <div className="logos">
                    <img src="./images/swift.png" />
                    <img src="./images/android.png" />
                    <img src="./images/react.png" />
                    <img src="./images/xcode_logo.png" />

                </div>
            </div> */}
        </div>
    )
}

// import img1 from '../../public/images/swift_logo.png'
// const ReactCardSlider = (props) => {
//     // const swift = new URL('',import.meta.url)
//     const slides = [1, 2, 3, 4];
//     return (
//         <div id="main-slider-container">
//             {/* <MdChevronLeft size={40} className="slider-icon left" /> */}
//             <div id="slider">
//                 <div className="slider-card">
//                     <img src="./images/swift.png" />
//                     <img src="./images/android.png" />
//                     <img src="./images/react.png" />
//                     <img src="./images/xcode_logo.png" />

//                 </div>
//                 {slides.map((slide, index)=>{
//                     return(
//                         <>
//                         </>
//                     )
//                 })}
//             </div>
//             {/* <MdChevronRight size={40} className="slider-icon right" /> */}
//         </div>
//     )
// }

export default ReactCardSlider