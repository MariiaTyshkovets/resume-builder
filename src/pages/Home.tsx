import homeImage from '../assets/home-image.png';
import homeDarkImage from '../assets/home-image-grey.png';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
    const { theme } = useTheme();
    const image = theme === 'dark' ? homeDarkImage : homeImage;

    return (
        <div className='flex gap-6 items-center justify-center'>
            <div className="min-h-[calc(100vh-64px)] flex items-center px-10">
                <div className="max-w-2xl">
                    <h1 className="text-7xl md:text-7xl font-bold text-primary mb-6">
                        Free<br/>Resume<br/>Builder
                    </h1>
                    <p className="text-lg text-primary mb-8">
                        <ul className='flex items-baseline list-disc list-inside flex-col text-2xl gap-2'>
                            <li>Easy to create</li>
                            <li>Customizeable design</li>
                            <li>Download as PDF</li>
                        </ul>
                    </p>
                    <Link to="/builder">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md cursor-pointer">
                            Start creating a resume
                        </button>
                    </Link>
                </div>
            </div>
            <div className='max-w-md'>
                <img src={image} alt="Women create a resume" />
            </div>
        </div>
    );
}

export default Home;