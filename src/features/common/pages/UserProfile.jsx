import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
	const navigate = useNavigate()
	return (
		<div className='flex flex-col w-full h-full gap-3 justify-center items-center'>
			<p
				className='text-lg rounded-lg cursor-pointer font-semibold p-3 w-fit bg-gray-100 shadow-lg hover:scale-105'
				onClick={() => navigate('/')}
			>
				User Profile Page Goes Here, Click here to go back to Dashboard!
			</p>
		</div>
	)
}

export default UserProfile
