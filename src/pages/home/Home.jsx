import Contact from '../../components/contact/Contact'
import Experties from '../../components/experties/Experties'
import FeaturedProjects from '../../components/featuredProjects/FeaturedProjects'
import HeroBanner from '../../components/heroBanner/HeroBanner'

const Home = () => {
    return (
        <>
            <HeroBanner />
            <Experties />
            <FeaturedProjects />
            <Contact />
        </>
    )
}

export default Home