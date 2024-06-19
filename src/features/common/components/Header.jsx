import { useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	getBrokenState,
	getCollapsedState,
	getToggledState,
	setCollapsed,
	setToggled,
} from '../commonSlice'
import { MdNotes } from 'react-icons/md'
import { Menu } from 'primereact/menu'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const menuRight = useRef(null)

	const broken = useSelector(getBrokenState)
	const collapsed = useSelector(getCollapsedState)
	const toggled = useSelector(getToggledState)

	const sideBarCollapseControl = () => {
		if (broken) {
			return dispatch(setToggled(!toggled))
		}
		return dispatch(setCollapsed(!collapsed))
	}

	const getPageTitle = () => {
		const currentPath = location.pathname
		console.log(currentPath)
		if (currentPath === '/') {
			return 'Dashboard'
		} else if (currentPath === '/profile') {
			return 'User Profile'
		}
	}

	const userMenuItems = useMemo(() => {
		return [
			{
				label: 'View Profile',
				icon: 'pi pi-user',
				command: () => {
					navigate('/profile')
				},
			},
			{
				label: 'Change Password',
				icon: 'pi pi-key',
				command: () => {
					alert('Link to change password page')
				},
			},
			{
				label: 'Logout',
				icon: 'pi pi-sign-out',
				command: () => {
					alert('Button for logout confirmation')
				},
			},
		]
	}, [])

	return (
		<div className='shadow-2 sticky top-0 z-50 flex w-full gap-3 bg-gray-100 p-2 items-center justify-between'>
			<div className='flex gap-3 justify-center items-center'>
				<MdNotes
					className='cursor-pointer text-3xl'
					onClick={() => sideBarCollapseControl()}
				/>
				<p className='text-xl font-bold text-start'>{getPageTitle()}</p>
			</div>
			<div className='flex self-end justify-center items-center gap-4'>
				<img
					className='cursor-pointer rounded-full border'
					alt={"User's profile image"}
					src={`https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png`}
					width='35'
					onClick={(event) => menuRight.current.toggle(event)}
					aria-controls='popup_menu_right'
					aria-haspopup
				/>
				<Menu
					model={userMenuItems}
					popup
					ref={menuRight}
					id='popup_menu_right'
					popupAlignment='right'
				/>
			</div>
		</div>
	)
}

export default Header
