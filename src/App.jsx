import { Suspense } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom'
import Layout from './features/common/pages/Layout'
import Dashboard from './features/dashboard/pages/Dashboard'
import ServerError from './features/common/pages/ServerError'
import NotFound from './features/common/pages/NotFound'
import Forbidden from './features/common/pages/Forbidden'
import Loading from './features/common/pages/Loading'
import UserProfile from './features/common/pages/UserProfile'

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route
						path='/'
						element={
							<Layout>
								<Outlet />
							</Layout>
						}
					>
						<Route
							path=''
							index
							element={<Dashboard />}
						/>
						<Route
							path='profile'
							index
							element={<UserProfile />}
						/>
					</Route>
					<Route
						path='/server-error'
						element={<ServerError />}
					/>
					<Route
						path='/forbidden'
						element={<Forbidden />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</Suspense>
		</Router>
	)
}

export default App
