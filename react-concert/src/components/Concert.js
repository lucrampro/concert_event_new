import React from 'react';
// import des styles
import '../styles/concert.scss'
// Début du component
class Concert extends React.Component{
    // constructor
        state = {
            data:{
                title: 'Concert Event',
                ville: 'Fontenay Sous Bois',
                date: '5-7 Novembre',
                text: 'Great show with the participation of famous music groups and singers. It will be the best weekend!',
                button: 'NOTIFY ME'
            }
        }
    // render
    render (){
        const info = this.state.data
        return (
            <div className="Concert">
                <div className="wrapper__content">
                    <h1> { info.title} </h1>
                    <h2 className="concert__date"> { info.date } </h2>
                    <h2 className="concert__ville"> { info.ville } </h2>
                    <p> { info.text } </p>
                    <button> { info.button } </button>
                </div>
            </div>
        )
    }
}
// EXPORT
export default Concert