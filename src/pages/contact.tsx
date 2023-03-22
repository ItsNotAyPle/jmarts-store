import { Navbar } from "@/components/Navbar"
import { Wrapper } from "@/components/Wrapper"

export default function ContactPage() {
    return (
        <Wrapper>
            <Navbar />
            <div>
                <form action="/api/newproduct" method="POST">
                    <input type="email" name="email" placeholder="your email" id="email" value="dkgisrjg@gmail.com"/>
                    <input type="text" name="Subject" placeholder="subject" id="subject" value="dkgisrjg"/>
                    <input type="text" name="content" placeholder="contect" id="content" value="dkgisrjg"/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        </Wrapper>
    );
}