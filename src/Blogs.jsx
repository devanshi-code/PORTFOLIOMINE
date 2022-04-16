import React from 'react';
import Footer from './Footer';
import './home.css';
import Blog from './Blog.jsx';

const Blogs=()=>{
    return (
        <>
          <div className="Blogs " style={{textAlign:"center",marginTop:"90px"}}>
           <h1 className="Blogs" style={{fontWeight:"300"}}>Blogs</h1>
         <hr style={{width:"75%"}}/>
         </div>
         <div className="projectbg">
                    <div className="portfolio-container ">
                        <Blog project="Open-source-experience" bloghref="https://medium.com/@devu2732/personal-experience-lets-grow-more-summer-of-code-8b978342c0ae" />

                        
                    </div>
                </div>

        </>
    )
}

export default Blogs;