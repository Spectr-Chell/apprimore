import { useState } from "react"
import "../Section/Section.css"

export default function InfoSection( { Pos } ) {
    const [isHoveredInfoTable1, setIsHoveredInfoTable1] = useState(false);
    const [isHoveredInfoTable2, setIsHoveredInfoTable2] = useState(false);
    const [isHoveredInfoTable3, setIsHoveredInfoTable3] = useState(false);

    return (
        <section 
            style={{ 
                marginTop: '80px', 
                transition: 'transform 1s, opacity 0.6s',
                transform: `translateX(${!Pos ? "1497px" : "0px"})`
                
                }}>
            <div style={{ height: "400px" }} className="sectionDiv">
                <div 
                    onMouseEnter={() => {setIsHoveredInfoTable1(true)}} 
                    onMouseLeave={() => {setIsHoveredInfoTable1(false)}} 
                    style={{ 
                        position: "absolute",
                        width: "300px", 
                        height: "300px", 
                        top: "50px", 
                        left: "250px", 
                        borderRadius: "20px" 
                    }} 
                    className="ContainerInfo"
                >
                    <h1 
                        style={{ 
                            position: "relative",
                            fontFamily: "sans-serif", 
                            transition: 'transform 1s, opacity 0.6s', 
                            transform: `translateY(${isHoveredInfoTable1 ? 10 : 100}px)` 
                        }}>
                        Список тем 
                    </h1>
                    <h3 
                        style={{ 
                            position: "relative",
                            fontFamily: "sans-serif", 
                            transition: 'opacity 0.6s', 
                            color: "gray",
                            left: "0px",
                            top: "100px", 
                            opacity: `${isHoveredInfoTable1 ? 100 : 0}%` }}>
                        <ul>
                            <h5 style={ {position: 'absolute', top: '-100px'} }>Apple</h5>
                            <h5 style={ {position: 'absolute', top: '-60px'} }>Tesla</h5>
                            <h5 style={ {position: 'absolute', top: '-20px'} }>TechCrunch</h5>
                            <h5 style={ {position: 'absolute', top: '10px'} }>Wall Street Journal</h5>
                        </ul> 
                    </h3>
                </div>
                <div 
                    onMouseEnter={() => {setIsHoveredInfoTable2(true)}} 
                    onMouseLeave={() => {setIsHoveredInfoTable2(false)}} 
                    style={{ 
                        width: "700px", 
                        height: "140px", 
                        top: "50px", 
                        left: "575px", 
                        borderRadius: "20px" }} 
                        className="ContainerInfo">
                    <h1 
                        style={{ 
                            position: "relative",
                            fontFamily: "sans-serif", 
                            transition: 'transform 1s, opacity 0.6s', 
                            top: "35px",
                            transform: `translateX(${isHoveredInfoTable2 ? 250 : 0}px)` }}>
                        Цель
                    </h1>
                    <h3 
                        style={{ 
                            position: "relative",
                            fontFamily: "sans-serif", 
                            transition: 'transform 1s, opacity 0.6s',
                            top: "-25px",
                            left: "20px",
                            marginRight: "200px",
                            textAlign: "justify",
                            color: "gray",
                            opacity: `${isHoveredInfoTable2 ? 100 : 0}%` }}>
                        Показать React приложение
                    </h3>
                </div>
                <div 
                    onMouseEnter={() => {setIsHoveredInfoTable3(true)}} 
                    onMouseLeave={() => {setIsHoveredInfoTable3(false)}} 
                    style={{ 
                        width: "700px", 
                        height: "140px", 
                        top: "210px", 
                        left: "575px", 
                        borderRadius: "20px" }} 
                        className="ContainerInfo">
                    <h1 
                        style={{ 
                            position: "relative",
                            fontFamily: "sans-serif", 
                            transition: 'transform 1s, opacity 0.6s', 
                            top: "35px",
                            transform: `translateX(${isHoveredInfoTable3 ? -210 : 0}px)` }}>
                        Краткое описание
                    </h1>
                    <h3 
                        style={{ 
                            position: "relative",
                            fontFamily: "sans-serif", 
                            transition: 'transform 1s, opacity 0.6s', 
                            color: "gray",
                            top: "-35px",
                            left: "300px",
                            marginRight: "330px",
                            textAlign: "justify",
                            opacity: `${isHoveredInfoTable3 ? 100 : 0}%` }}>
                        Сайт берёт данные из json файлов делает небольшую фильтрацию и выводит на интерфейс
                    </h3>
                </div>
            </div>
        </section>
    )
}