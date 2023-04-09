import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"

export default function ContactPage() {
    return (
        <Wrapper>
            <Navbar />
            <div className="flex justify-center bg-gray-500 w-full h-full">
                <form className="bg-gray-700 h-fit" action="/api/newproduct" method="POST">
                    <div className="flex flex-col px-2">
                        <div>
                            <input className="p-2 m-4" placeholder="your email" type="text" name="email" id="email" />
                            <input className="p-2 m-4" placeholder="subject" type="text" name="subject" id="subject" />
                        </div>
                        <div>
                            <textarea className="w-full h-52 px-2 resize-none"  placeholder="content..." name="content" id="content" ></textarea>
                        </div>
                        <div className="my-4 mb-2">
                            <input className="text-center w-full py-2 px-10 font-semibold  bg-green-500" type="submit" value="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
}