import HomeOne from '../components/home/HomeOne.js';
import HomeTwo from '../components/home/HomeTwo.js';
import HomeThree from '../components/home/HomeThree.js';
import HomeFour from '../components/home/HomeFour.js';
import Contact from '../components/home/ContactFooter.js';

function Home() {
    return (
        <div>
            <HomeOne />
            <HomeTwo />
            <HomeThree />
            <HomeFour />
            <Contact />
        </div>
    );
}

export default Home;