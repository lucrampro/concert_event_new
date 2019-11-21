import React from 'react';
// import des styles
import '../styles/concert.scss'
// Début du component
class Concert extends React.Component{
    // constructor
        state = {
            title: 'Concert Event',
            ville: 'Fontenay Sous Bois',
            date: '5-7 Novembre',
            text: 'Great show with the participation of famous music groups and singers. It will be the best weekend!',
            button: 'NOTIFY ME'
        }
    // render
    render (){
        const data = this.state
        return (
            <div className="Concert">
                <div className="wrapper__content">
                    <h1> { data.title} </h1>
                    <h2 className="concert__date"> { data.date } </h2>
                    <h2 className="concert__ville"> { data.ville } </h2>
                    <p> { data.text } </p>
                    <button> { data.button } </button>
                </div>
            </div>
        )
    }
}
// EXPORT
export default Concert