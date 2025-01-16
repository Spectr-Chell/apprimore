import ScrollPanel from "../../ScrollPanel/ScrollPanel"
import '../../ScrollPanel/ScrollPanel.css'
const data = require('../../../data/TeslaData.json')

export default function AnaliticFetchSection2() { 
    const sortRemove = (item, index) => {
        if (item.author === '[Removed]' || item.description === '[Removed]'|| item.urlToImage === null) {
            return
        } else {
            return (
                <div className="content" key={index} style={ {height: '400px', color: 'white', backgroundColor: 'black'} }>
                <h3>{item.source.name}</h3>
                <h5 style={ {position: 'absolute', top: '0px', left: '15px', marginRight: '500px'} }>Автор: {item.author}</h5>
                <h5 style={ {position: 'absolute', top: '150px', left: '15px', marginRight: '500px', textAlign: 'justify'} }>{item.title}</h5>
                <h5 style={ {position: 'absolute', top: '200px', left: '15px', marginRight: '500px', textAlign: 'justify'} }>Описание: {item.description}</h5>
                <h5 style={ {position: 'absolute', top: '350px', left: '315px'} }><a href={item.url}>Источик</a></h5>
                <h5 style={ {position: 'absolute', top: '350px', left: '15px'} }>Дата публикации: {item.publishedAt}</h5>
                <img src={item.urlToImage} style={ {borderRadius: '20px', height: '280px', width: '400px', position: 'absolute', top: '80px', left: '650px'}} alt="Картинка отсутствует"></img>
            </div>
            )
        }
    }

    const containData = data.articles.map((item, index) => (
        sortRemove(item, index)
    ));

    return ( 
        <div
            style={{
                height: "660px",
                top: "-402px"  
            }} 
            className="sectionDiv"
        > 
            <h1>Новости Tesla</h1>
            <ScrollPanel className='scroll-panel' style={ {top: '80px', left: '200px', width: '1100px', height: '500px'} }>
                {containData}
            </ScrollPanel>
        </div> 
    ) 
}
