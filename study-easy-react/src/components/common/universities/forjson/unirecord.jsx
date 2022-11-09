import React, { useEffect, useState } from 'react'
import { Unicard } from './unicard';
import { useLocation } from 'react-router';
import "./uni.css";
import ReactPaginate from 'react-paginate'
export const Unirecord = ({gcountry}) => {

     const location = useLocation(); 
    const [data,setData]=useState([]);
    const [state, setState] = useState([]);


    const getData=()=>{
      fetch("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json")
        .then(function(response){
        //   console.log(response)
          return response.json();
        })
        .then(function(myJson) {
        //   console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

//pagination
    const given = gcountry.toString().toLowerCase();
    console.log(given);

//     const PER_PAGE = 10;
// const offset = currentPage * PER_PAGE;
// const currentPageData = data
//     .slice(offset, offset + PER_PAGE)
//     .map(({ thumburl }) => <img src={thumburl} />);
// const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <>
    <div className='container datarec'>
        {data && data.length>0 && data.map((item)=> {
            var check = given.includes(item.country.toLowerCase());
            console.log(check);
            if(check)
            {
              var temp = item.name.toString();
              // console.log(temp);
              return <Unicard uni={temp} link={item.web_pages[0]}/>
            }
        }
        )}
    </div>
    {/* <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      {currentPageData} */}
    </>
  )
}
