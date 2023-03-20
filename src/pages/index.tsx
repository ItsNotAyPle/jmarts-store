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
						<p className="text-8xl font-extrabold">JM Arts</p>
						<p className="text-2xl text-center font-bold border-t-2 border-black">Where fasion meets art</p>
					</div>
				</div>
			</div>
			<div className="flex bg-black text-white pt-20">
				<img className="pl-8 opacity-80" src="/static/juan-02.PNG" />
				<div className="w-full text-center">
					<h1 className="mpl-4 pt-2 text-2xl text-center"><b>WHO IS JUAN MESA?</b></h1>
					<p className="pb-4">
						Juan Mesa is a 16-year-old boy with Colombian roots and through his artistic journey, he has developed an animated and colorful art style. 
						He has tried to make a juvenile style of work. His work focuses on animation, doodles, and realism. He uses colors to demonstrate the beauty of art. 
						He gained experience in drawing by practicing at home and getting self-thought.
					</p>
					<p>
						He started drawing when his grandfather passed away. He started with a drawing dedicated to his grandfather. Then his love for art grew stronger each time. 
						He tried to convert a sad situation into the start of an amazing artistic future.
					</p>
					<p>
						He then expanded his vision into not only drawing but creating a brand/business combining art and fashion to make it stand out. Now he sells clothes with unique 
						designs and motivational quotes hidden in every design. Juan Mesa is the founder of JM Arts. Juan Mesa is not only a boy with a future, he is a teenager with talent, 
						vision, and imagination with a level of creativity that is really high.
					</p>
				</div>
			</div>
			<div className="h-24 bg-black">

			</div>
  	  	</Wrapper>
  	)
}
