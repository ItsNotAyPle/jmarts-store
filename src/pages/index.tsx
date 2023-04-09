import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"
import Image from "next/image"
import Script from "next/script"
import Head from "next/head"
import { useEffect, useState } from "react"

const Projects = () => {
	return (
		<div className="bg-black w-full text-white ">
			<div className="w-full h-full flex pt-20 justify-center">
				<div className="">
					<h1 className="w-full font-bold text-3xl py-8">
						ONLY WE KNOW: upcoming project
					</h1>
					<img 
						src="/static/owk.png" 
						className="pl-10"
					/>
				</div>
			</div>
			<div className="w-full h-full pt-40">
				<div className="flex flex-col md:flex-row">
					<div>
						<h1 className="w-full font-bold text-3xl text-center py-8">
							Find the way
						</h1>
						<p className="text-justify px-2 mb-2 md:px-8 md:m-0">
							“Find the way” is a t-shirt that inspires people. “ Find the way” 
							has a design of a dragon at the back and the quote “Find the way” 
							in Cantonese at the front. The design has an inspirational message 
							about never giving up and perseverance. This message inspires the young 
							generation to fight for their dreams and to be a light in the darkness.
						</p>
					</div>
					<Image 
						src="/static/juan-01-transformed.png" 
						className=""
						alt="ftw picture"
						width={850}
						height={800}
					/>

				</div>
			</div>	
		</div>
	);
}

export default function Home() {
  	return (
  	  	<Wrapper>
			{/* <Head>
				<Script src="/statc/js/slideshow.js" />
			</Head> */}
  	  	  	<Navbar />
			<div className="w-full h-full " style={{backgroundImage: "url('/static/watercolor.png')"}}>
				<div className="grid place-items-center w-full h-full">
					<div className="pb-28">
						<p className="text-4xl text-center lg:text-8xl font-extrabold">JM Arts</p>
						<p className="text-l lg:text-2xl text-center font-bold border-t-2 border-black">
							Where fashion meets art
						</p>
					</div>
				</div>
				{/* <ArtSlideshow /> */}

				<Projects />
			</div>
			{/* TODO: add some sample products */}
  	  	</Wrapper>
  	)
}
