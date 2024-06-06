import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Layout from '../layout/Layout'

export default function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
