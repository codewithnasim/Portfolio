import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    return (
      <div>
        <div className="card my-4" style={{width: "100%",}}>
            <img src={this.props.imageUrl} className="card-img-top" alt="image loading"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <a rel="noopener" href={this.props.newsUrl} target='_blank' className="btn btn-dark">see more</a>
            </div>
        </div>
      </div>
    )
  }
}
