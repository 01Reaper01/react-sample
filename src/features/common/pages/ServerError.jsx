import Lottie from 'lottie-react'
import serverError from '../../../assets/lottieFiles/server-error.json'

const ServerError = () => {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center bg-gray-300" onClick={() => history.back()}>
			<Lottie animationData={serverError} />
		</div>
	)
}

export default ServerError
