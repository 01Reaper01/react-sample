import Lottie from 'lottie-react'
import forbidden from '../../../assets/lottieFiles/403.json'

const Forbidden = () => {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center bg-[#cccc]" onClick={() => history.back()}>
			<Lottie animationData={forbidden} />
		</div>
	)
}

export default Forbidden
