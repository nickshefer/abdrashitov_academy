import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'
import { navLinks } from './navLinks'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header navLinks={navLinks} />
            {children}
            <Footer />
        </>
    )
}
