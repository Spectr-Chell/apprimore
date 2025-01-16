import Button from "../Butoon/Button.jsx"
import "../Section/Section.css"

export default function MenuSection( { Pos } ) {

    const scrollToSectionApple = () => {
        window.scrollTo({
            top: 402, 
            behavior: "smooth" 
        });
    };

    const scrollToSectionTesla = () => {
        window.scrollTo({
            top: 1064, 
            behavior: "smooth" 
        });
    };
    const scrollToSectionTechCrunch = () => {
        window.scrollTo({
            top: 1726, 
            behavior: "smooth" 
        });
    };

    const scrollToSectionWSJ = () => {
        window.scrollTo({
            top: 2388, 
            behavior: "smooth" 
        });
    };

    return (
        <div 
            style={{
                    height: "400px", 
                    top: "-402px", 
                    transition: 'transform 1s, opacity 0.6s',
                    transform: `translateX(${Pos ? "0px" : "-1497px"})` 
                }} 
            className="sectionDiv"
        >
            <Button 
                className='MenuButton'
                style={{
                    position: 'absolute',
                    top: '130px', left: '500px',
                    height: '80px', width: '200px',
                    borderRadius: '20px'
                }}
                onClick={scrollToSectionApple}
            >
                Новости Apple
            </Button>
            <Button     
                className='MenuButton'
                style={{
                    position: 'absolute',
                    top: '130px', left: '800px',
                    height: '80px', width: '200px',
                    borderRadius: '20px'
                }}
                onClick={scrollToSectionTesla}
            >
                Новости Tesla
            </Button>
            <Button 
                className='MenuButton'
                style={{
                    position: 'absolute',
                    top: '250px', left: '500px',
                    height: '80px', width: '200px',
                    borderRadius: '20px'
                }}
                onClick={scrollToSectionTechCrunch}
            >
                Новости TechCrunch
            </Button>
            <Button 
                className='MenuButton'
                style={{
                    position: 'absolute',
                    top: '250px', left: '800px',
                    height: '80px', width: '200px',
                    borderRadius: '20px',
                }}
                onClick={scrollToSectionWSJ}
            >
                Новости Wall Street Journal
            </Button>
        </div>
    )
}