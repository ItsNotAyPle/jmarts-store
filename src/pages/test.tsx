import { Slideshow } from "@/components/Slideshow";

const Test = () => {
	return (
		<div className="w-full h-full">
			<Slideshow 
				imagelinks={[
					"/static/juan-01.jpg"
				]}
			/>
		</div>
	);
}

export default Test;