import React from 'react';
// import des styles
import '../styles/concert.scss'
// Début du component
class Concert extends React.Component{
    render (){
        return (
            <div className="Concert">
                <div className="wrapper__content">
                    <h1>
                        Concert Event
                    </h1>
                    <h2 className="concert__date">5-7 Novembre</h2>
                    <h2 className="concert__ville">Fontenay Sous Bois</h2>
                    <p>Great show with the participation of famous music groups and singers. It will be the best weekend!</p>
                    <button>NOTIFY ME</button>
                </div>
            </div>
        )
    }
}
// EXPORT
export default Concert