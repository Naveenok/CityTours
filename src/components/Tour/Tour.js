import React, { Component } from 'react'
import './Tour.scss';

export default class Tour extends Component {
    state = {
        showInfo: false

    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
   
    render(props) {
        const {removeTour}=this.props;
        const {id, city, img, name, info } = this.props.tour;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} />
                    <span className="close-btn" onClick={()=>{removeTour(id)}}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{name}</h3>
                    <h4>{city}</h4>
                    <h5>info
                        <span onClick={this.handleInfo}>

                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}