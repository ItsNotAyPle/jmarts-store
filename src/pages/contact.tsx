import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"

export default function ContactPage() {
    return (
        <Wrapper>
            <Navbar />
            <div className="flex justify-center bg-gray-500 w-full h-full">
                <form className="bg-gray-700 h-fit" action="/api/newproduct" method="POST">
                    <ul>
                        <li>
                            <input 
                                className="px-4 p-2 m-2"
                                type="email" 
                                name="email" 
                                placeholder="your email" 
                                id="email" 
                            />

                            <input 
                                className="px-4 p-2 m-2"
                                type="email" 
                                name="email" 
                                placeholder="your email" 
                                id="email" 
                            />

                        </li>
                        <li>
                            <input 
                                className="px-4 p-2 m-2"
                                type="text" 
                                name="Subject" 
                                placeholder="subject" 
                                id="subject" 
                            />
                        </li>
                        <li>
                            <input 
                                className="px-4 p-2 m-2"
                                type="text" 
                                name="content" 
                                placeholder="content..." 
                                id="content" 
                            />
                        </li>

                    </ul>
                </form>
            </div>
        </Wrapper>
    );
}