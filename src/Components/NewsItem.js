import React from 'react'

export default function NewsItem(props) {
      let {title, description, imageUrl, newsUrl, author, time, source} = props;
    return (
      <div className='container my-3'>
        <div className="card rounded">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{zIndex: 1, left: "95%"}}>{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-success fw-bolder">By {author==null?"Unknown":author} on {new Date(time).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}