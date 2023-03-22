import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"
import { Animator, batch, FadeIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn } from "react-scroll-motion"
import Image from "next/image"

export default function Home() {
  	return (
		<Wrapper>
			<Navbar />
			<div className="w-full h-full bg-gradient-to-br from-green-300 to-green-700">
				<div className="flex flex-col">
					<img src="/static/jmarts.png" />
					<p className="mx-80 pb-28">
						JM Arts is a company that combines art with fashion. A company that targets the new generation and 
						inspires them to let their imagination shine. It is for people who are crazy, unconventional, different, 
						and unique. We want them to show this with our wild revolutionary designs. We are a company that uses the 
						power of art to communicate happiness and creativity in a way that could not otherwise be described. JM Arts 
						is a company that wants to inspire the new generation to let their imagination flow freely and not be afraid 
						to be themselves, without compromising style and fashion. JM Arts is a company that tries to revolutionize the 
						new generation using digital and traditional ways of art. JM Arts uses art with a high level of meaning or message 
						to the world and society itself.
					</p>
					<p className="mx-80">
						JM Arts is unique because is created by a 16-year-old boy, meaning he understands the audience's needs and 
						likes and can easily attract the new generation. Whereas, if you look at brands like Nike, Adidas and etc. 
						They all have the same meaning. Nike has a “Just do it” quote in all their products. So if you see, JM Arts 
						is unique as every product released has new designs and different quotes that portray different meanings with 
						context. JM Arts is unique as it combines fashion and art to show a message to society but mostly the new 
						generation. The quality of the clothes is comfortable and at a good price.
					</p>
				</div>
			</div>
			<div className="flex bg-black text-white pt-20">
				<img className="pl-8 opacity-80" src="/static/juan-02.PNG" />
				<div className="w-full">
					<h1 className="mpl-4 pt-2 text-2xl text-center"><b>WHO IS JUAN MESA?</b></h1>
					<p className="w-5/6 m-auto pb-4">
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
