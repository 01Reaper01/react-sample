import Lottie from 'lottie-react'
import notFound from '../../../assets/lottieFiles/404.json'

const NotFound = () => {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center bg-gray-300" onClick={() => history.back()}>
			<Lottie animationData={notFound} />
		</div>
	)
}

export default NotFound
