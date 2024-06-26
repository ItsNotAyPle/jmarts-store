import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"
import { Animator, batch, FadeIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn } from "react-scroll-motion"
import Image from "next/image"
import { useEffect, useState } from "react";

interface IMemberCardProps {
	img_src: string;
	name: string;
	member_id: number;
}

const JUAN_TEXT = `
Juan Mesa is a 16-year-old boy with Colombian roots and through his 
artistic journey, he has developed an animated and colorful art style. 
He has tried to make a juvenile style of work. His work focuses on 
animation, doodles, and realism. He uses colors to demonstrate the 
beauty of art. He gained experience in drawing by practicing at home 
and getting self-thought.

He started drawing when his grandfather passed away. He started with a 
drawing dedicated to his grandfather. Then his love for art grew stronger 
each time. He tried to convert a sad situation into the start of an amazing 
artistic future.

He then expanded his vision into not only drawing but creating a brand/business 
combining art and fashion to make it stand out. Now he sells clothes with unique 
designs and motivational quotes hidden in every design. Juan Mesa is the founder
of JM Arts. Juan Mesa is not only a boy with a future, he is a teenager with
talent, vision, and imagination with a level of creativity that is really high. `

const CARLOS_TEXT = `
Carlos Mesa is the Co-Founder and Business Manager of JM Arts. He is a 20-year-old 
man with Colombian roots. Brother of the creative mind behind it all - Juan Mesa, 
who put the business idea into practice. Studying at City University of London one
 of the most prestigious business schools in London ( Bayes Business School), Carlos
followed the path of International Business as a career.

As a young man who has lived in 5 countries, Carlos has gained a lot of experience and
expanded his knowledge in culture and business. He has always had a passion for the 
subject and has a talent for negotiating with people. Carlos is very giving to people and
his interpersonal skills is what make him stand out. Having had various work experiences 
alongside his university career, he obtained valuable skills: leadership, communication,
and analytical skills amongst them, and now decided to put them to the test converting 
Juan Mesa’s unique and stylish designs into a real business.

Together, Carlos and Juan aspire to become an inspiration for the young generation, and
thus why they decided to turn their creativity into a business that will revolutionize 
the way art and fashion are made. `

const JMARTS_TEXT = `
JM Arts is a company that combines art with fashion. A company that targets the new 
generation and inspires them to let their imagination shine. It is for people who 
are crazy, unconventional, different, and unique. We want them to show this with 
our wild revolutionary designs. We are a company that uses the power of art to 
communicate happiness and creativity in a way that could not otherwise be described. 
JM Arts is a company that wants to inspire the new generation to let their imagination 
flow freely and not be afraid to be themselves, without compromising style and fashion. 
JM Arts is a company that tries to revolutionize the new generation using digital and 
traditional ways of art. JM Arts uses art with a high level of meaning or message to 
the world and society itself.
`

const JMART_TEXT_2 = `
JM Arts is unique because is created by a 16-year-old boy, meaning he understands 
the audience's needs and likes and can easily attract the new generation. Whereas, 
if you look at brands like Nike, Adidas and etc. They all have the same meaning. 
Nike has a “Just do it” quote in all their products. So if you see, JM Arts is 
unique as every product released has new designs and different quotes that 
portray different meanings with context. JM Arts is unique as it combines 
fashion and art to show a message to society but mostly the new generation. 
The quality of the clothes is comfortable and at a good price.
`

const Members = () => {
	const [member, setCurrentMember] = useState(0);
	const [text, setText] = useState("");
	const [name, setName] = useState("");

	useEffect(() => {
		console.log(member);

		switch (member) {
			case 0:
				setText(JUAN_TEXT);
				setName("Juan Mesa");
				break;
			case 1:
				setText(CARLOS_TEXT);
				setName("Carlos Mesa");
				break;

		}

	}, [member]);

	const MemberCard = (props: IMemberCardProps) => {
		return (
			<div className="w-72 h-fit bg-blue border-indigo-600 border-2 rounded-bl-2xl rounded-br-2xl hover:cursor-pointer hover:animate-pulse mx-2" onClick={e => setCurrentMember(props.member_id)}>
				<img className="h-full" src={props.img_src} />
				<h1 className="font-bold text-xl text-white text-center bg-indigo-600 rounded-bl-xl rounded-br-xl">{props.name}</h1>
			</div>
		);
	}

	return (
		<div className="w-full">
			<div className="w-full py-10 bg-black">
				<h1 className="text-white text-2xl text-center font-bold">Meet the team</h1>
			</div>
			<div className="flex flex-row justify-center my-12">
				<MemberCard
					img_src="/static/juan-01.jpg"
					name="Juan Mesa"
					member_id={0}
				/>
				<MemberCard
					img_src="/static/calos-01.jpg"
					name="Carlos Mesa"
					member_id={1}
				/>
			</div>
			<div className="w-full h-fit bg-black text-white pb-20">
				<h1 className="py-4 text-3xl font-extrabold text-center">Who is {name}?</h1>
				<p className="text-sm px-5 md:text-lg md:px-20 text-justify">{text}</p>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<Wrapper>
			<Navbar />
			<div className="bg-black text-white">
				<div className="flex flex-col md:flex-row">
					<div className="w-full border-none md:w-1/2 md:border-r-2 border-white px-4">
						<h1 className="text-2xl font-bold text-center">What is JMarts?</h1>
						<p className="text-justify">{JMARTS_TEXT}</p>
					</div>
					<div className="w-full border-none pt-12 md:pt-0 md:w-1/2 md:border-l-2 border-white px-4">
						<h1 className="text-2xl font-bold text-center"> What makes JMarts unique?</h1>
						<p className="text-justify">{JMART_TEXT_2}</p>
					</div>
				</div>
			</div>
			<div className="w-full h-full">
				<Members />
			</div>
		</Wrapper>
	)
}
