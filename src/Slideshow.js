import { SLIDESHOWDELAY, SLIDESHOW_IMAGES } from "./Constants";
import classes from  "./Slideshow.module.css";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useEffect, useState } from "react";
const Slideshow = ()=> {
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(
            ()=>
            setIndex((prevIndex)=> { return prevIndex=== SLIDESHOW_IMAGES.length-1 ? 0:prevIndex+1}), SLIDESHOWDELAY);
        // setTimeout(
        //     () =>
        //       setIndex((prevIndex) =>
        //         prevIndex === SLIDESHOW_IMAGES.length - 1 ? 0 : prevIndex + 1
        //       ),
        //       SLIDESHOWDELAY
        //   );
        return()=> {clearTimeout(timer)};
    }, [index]);

    const rightArrowHandler= ()=>{
        setIndex((prevIndex)=> { return prevIndex=== SLIDESHOW_IMAGES.length-1 ? 0:prevIndex+1})
    }
    const leftArrowHandler = () => {
        setIndex((prevIndex)=> { return prevIndex=== 0 ? SLIDESHOW_IMAGES.length-1:prevIndex-1})
    }

    return(
        <div className={classes.Slideshow} >
            <KeyboardArrowLeftIcon className={classes.arrowLeft} style={{fontSize:"5rem", fontWeight:50 }} onClick={leftArrowHandler}/>
            <div className={classes.SlideshowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                {SLIDESHOW_IMAGES.map((imgPath, index) => (
                    <img src={imgPath} className={classes.slide} alt="slideshowimage" key={index}  />
                ))} 
                 {/* For Dots in the bottom */}
                {/* <div className={classes.slideshowDots}>
                    {
                        SLIDESHOW_IMAGES.map((_,idx)=>(
                            <div key={idx} className={classes.slideshowDot}></div>
                        ))
                    }
                </div> */}
            </div>
            <KeyboardArrowRightIcon className={classes.arrowRight} style={{fontSize:"5rem", fontWeight:50}} onClick={rightArrowHandler}/>        
        </div>

    )

}

export default Slideshow;