
import donateImage from "../assets/donate.jpg"

export default function Test(){
    return (<div className="p-10 my-5 bg-green-500 text-gray-100">
        <h2>TEST</h2>
        <div>
			<img src={donateImage.src} alt="donate" />
		</div>
    </div>)
}