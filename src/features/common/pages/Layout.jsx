import Footer from '../components/Footer'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'

const Layout = ({ children }) => {
	return (
		<div className='flex h-screen w-screen'>
			<SideMenu />
			<div className='flex-col flex w-full h-full overflow-y-auto'>
				<Header />
				<div className='flex w-full h-full overflow-y-auto p-3'>
					{children}
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
