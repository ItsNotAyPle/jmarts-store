import { useEffect, useState } from "react";
import Image from "next/image"

interface ISlideshowProps {
    imagelinks:string[];
    height?:number;
    width?:number;
}
const NEXT = ">";
const PREV = "<";

const Slideshow = (props:ISlideshowProps) => {
    let height = props.height;
    let width = props.width;
    if (props.height == undefined) height = 800;
    if (props.width == undefined) width = 1000;

	const [index, setIndex] = useState(0);
    
    const indexHandler = (newindex:number) => {
        console.log(props.imagelinks.length);
        if (newindex === props.imagelinks.length || newindex <= -1 ) 
        {
            setIndex(0);
        }
        
        setIndex(newindex);
    }

	// useEffect(() => {
	// 	if (index == props.imagelinks.length) {
	// 		console.log(props.imagelinks.length);
	// 		setIndex(0);
	// 	}
	// }, [index])

	return (
		<div className="">
			<Image 
                className="aspect-video" 
                src={props.imagelinks[index]} 
                alt="image" 
                width={width} 
                height={height}
            />
			<button onClick={(e) => indexHandler(index + 1)}>
            sfgsg
            </button>
            <h1>{index}</h1>
		</div>
	);
}

export {Slideshow}