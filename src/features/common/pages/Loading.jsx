import Lottie from 'lottie-react'
import loading from '../../../assets/lottieFiles/loading.json'

const Loading = () => {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center">
			<Lottie animationData={loading} />
		</div>
	)
}

export default Loading
