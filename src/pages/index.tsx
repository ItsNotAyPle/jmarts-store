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
			</div>
			{/* TODO: add some sample products */}
  	  	</Wrapper>
  	)
}
