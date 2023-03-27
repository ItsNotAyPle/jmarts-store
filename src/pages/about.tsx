import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"
import { Animator, batch, FadeIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn } from "react-scroll-motion"
import Image from "next/image"

export default function Home() {
  	return (
		<Wrapper>
			<Navbar />
			<div className="w-full h-full">
				<div className="">
					<div className="flex flex-row  bg-gradient-to-br from-green-300 to-green-700">
						<img src="/static/juan-01.jpg" />
						<div className="text-center">
							<h1 className="text-3xl font-bold pb-2">Who is Juan Mesa?</h1>
							<p>
								Juan Mesa is a 16-year-old boy with Colombian roots and through his 
								artistic journey, he has developed an animated and colorful art style. 
								He has tried to make a juvenile style of work. His work focuses on 
								animation, doodles, and realism. He uses colors to demonstrate the 
								beauty of art. He gained experience in drawing by practicing at home 
								and getting self-thought.
							</p>
						</div>
					</div>
					{/* <div className="bg-gradient-to-bl from-green-700 to-green-300">
						<img src="/static/calos-01.jpg" />
						<div>
							<h1>Whos is </h1>
						</div>
					</div> */}
				</div>
			</div>
  	  	</Wrapper>
  	)
}
