import React, { Component } from 'react'
import './Tour.scss';

export default class Tour extends Component {
    render(props) {
        return (
            <article className="tour">
                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1567917633081-c6bd214fed5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                    <span className="close-btn">
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{props.key}.</h3>
                    <h4>name</h4>
                    <h5>info
                        <span>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    <p>
                        dshjvdsffdsfdjhfd hjdjdfhdfshjdsfjhfsd hjjhfdjhd
                    </p>
                </div>
            </article>
        )
    }
}