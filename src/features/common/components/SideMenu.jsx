import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import {
	getCollapsedState,
	getToggledState,
	setBroken,
	setToggled,
} from '../commonSlice'
import { MdMore, MdSpaceDashboard } from 'react-icons/md'
import DefaultLogo from '../../../assets/images/sample-logo.jpg'

const SideMenu = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const collapsed = useSelector(getCollapsedState)
	const toggled = useSelector(getToggledState)

	const menuItemStyles = {
		root: {
			fontSize: '14px',
			fontWeight: 300,
		},
		SubMenuExpandIcon: ({ active, open }) => {
			return {
				color: open && active ? '#37B3E0' : '#00000',
			}
		},
		button: ({ active }) => {
			return {
				borderLeft: active ? '6px solid' : '',
				borderColor: active ? '#37B3E0' : '',
				fontWeight: active ? 500 : 400,
				backgroundColor: active ? '#F3FBFF' : '',
				color: active ? '#37B3E0' : '#00000',
				':hover': {
					backgroundColor: '#CCCCC',
				},
			}
		},
		label: ({ open }) => {
			return {
				fontWeight: open ? 400 : undefined,
			}
		},
		icon: ({ active }) => {
			return {
				filter: active
					? 'invert(87%) sepia(39%) saturate(6970%) hue-rotate(162deg) brightness(95%) contrast(83%)'
					: '',
			}
		},
		subMenuContent: {
			backgroundColor: 'transparent',
		},
	}

	return (
		<Sidebar
			collapsed={collapsed}
			toggled={toggled}
			onBackdropClick={() => dispatch(setToggled(false))}
			onBreakPoint={(broken) => {
				dispatch(setBroken(broken))
			}}
			breakPoint='lg'
			width='300px'
			rootStyles={{
				border: 'none',
			}}
		>
			<div className='flex mb-[80px] w-full items-center justify-center font-bold'>
				<img
					className='p-3'
					src={DefaultLogo}
					alt='Company logo'
					width={100}
				/>
				{!collapsed && 'Company Logo'}
			</div>
			<Menu
				closeOnClick
				menuItemStyles={menuItemStyles}
			>
				<MenuItem
					icon={<MdSpaceDashboard size={25} />}
					active={location.pathname === '/'}
					component={<Link to={'/'} />}
				>
					{'Dashboard'}
				</MenuItem>
				<SubMenu
					label='Submenu'
					icon={<MdMore size={25} />}
				>
					<MenuItem> Submenu item 1 </MenuItem>
					<MenuItem> Submenu item 1 </MenuItem>
				</SubMenu>
			</Menu>
		</Sidebar>
	)
}

export default SideMenu
