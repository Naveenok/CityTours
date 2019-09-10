import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from './tourlistdata';

export default class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour=(id)=>{
        const{tours}=this.state;
        const sortedours=tours.filter((tour)=>{
            if(tour.id!==id){
                return tour;
            }
        });
        this.setState({
            tours:sortedours
        });
        console.log(sortedours);
    };
    
    render() {
        const { tours } = this.state;
        return (
            <section className="tourList">
                {tours.map(tour => {
                    return (<Tour  key={tour.id} tour={tour} removeTour={this.removeTour}/>)
                })}

            </section>
        )
    }
}
