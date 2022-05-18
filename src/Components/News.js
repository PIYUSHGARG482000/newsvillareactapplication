import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export default function News(props) {

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  
  const capitalize = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const updateNews = async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    
  }
  //for calling API and fetch the Json format
  useEffect(()=> {
    document.title = `NewsVilla - ${capitalize(props.category)}`;
    updateNews();
    //eslint-disable-next-line   
  },[])

   const fetchMoreData = async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);
    setarticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
  }

    return (
      <>
        <h1 className='text-center' style={{marginTop: '90px'}}>NewsVilla - Top {capitalize(props.category)} Headlines of today.</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={(articles.length <= totalResults) && <Spinner/>}
        >
        <div className="container my-3">
          <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage == null?"https://cutt.ly/gGVrjXi":element.urlToImage} 
                      newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
                  </div>
              })}
          </div>
        </div>
         </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.previouspage}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pagecount)} className="btn btn-dark" onClick={this.nextpage}>Next &rarr;</button>*/}
        </> 
    )
  
}
News.defaultProps = {
  country : "in",
  pagecount : 6,
  category : "general"
}

News.propTypes = {
    country : PropTypes.string,
    pagecount: PropTypes.number,
    category: PropTypes.string
}