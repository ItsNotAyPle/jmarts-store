import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"
import { Animator, batch, FadeIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn } from "react-scroll-motion"
import Image from "next/image"

export default function Home() {
  	return (
  	  	<Wrapper>
  	  	  	<Navbar />
			<div className="w-full h-full" style={{backgroundImage: "url('/static/watercolor.png')"}}>
				<div className="grid place-items-center w-full h-full">
					<div className="pb-28">
						<p className="text-4xl text-center lg:text-8xl font-extrabold">JM Arts</p>
						<p className="text-l lg:text-2xl text-center font-bold border-t-2 border-black">Where fasion meets art</p>
					</div>
				</div>
				<div className="bg-black w-full h-full">
					<img 
						src="/static/jmarts.png" 
						className="pt-20 pl-10"
					/>
					<h1>What is JMarts?</h1>
					<p>JM Arts is a company that combines art with fashion. A company that targets the new 
						generation and inspires them to let their imagination shine. It is for people who 
						are crazy, unconventional, different, and unique. We want them to show this with 
						our wild revolutionary designs. We are a company that uses the power of art to 
						communicate happiness and creativity in a way that could not otherwise be described. 
						JM Arts is a company that wants to inspire the new generation to let their imagination 
						flow freely and not be afraid to be themselves, without compromising style and fashion. 
						JM Arts is a company that tries to revolutionize the new generation using digital and 
						traditional ways of art. JM Arts uses art with a high level of meaning or message to 
						the world and society itself.
					</p>
				</div>
			</div>
			{/* TODO: add some sample products */}
  	  	</Wrapper>
  	)
}
