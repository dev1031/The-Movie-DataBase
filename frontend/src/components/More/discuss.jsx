import React from 'react';

class Discuss extends React.Component{
    render() {
        return (
            <div className ='container'>
                <h1> Let's Chat</h1>
                <div className="discuss" style ={{display :"flex" ,color:"white" , textAlign:"center"}} >
                    <div className ="col-md-6" style ={{ height : "200px" , backgroundImage : "radial-gradient(at 30% top, rgba(10, 85, 63, 1) 0%, rgba(3,37,65, 1) 100%)",margin:"30px" }}>
                     <div className ="col-md-12" style={{ color:"white",textAlign :"center", height : "200px" ,marginLeft:"-15px", backgroundImage: "url(" + "https://www.themoviedb.org/assets/2/v4/account_pipes/green-79a9507a08a7e5a9b8c643a69026fe46191c45972cb45b944ab4b5f8a9110b03.svg" + ")" , backgroundPositionX : "-110px" , backgroundPositionY:"-540px" }}>
                     <h3 style={{paddingTop:"50px" , fontWeight:"700px" }}>Recent Movie Discussions</h3>
                     <div class="container">
                        <div className="row">
                            <div className="col" style={{ textAlign:"right"}}>14,136</div>
                            <div className="col" style={{ textAlign:"left"}}>Favourite scens</div>
                            <div className="w-100"></div>
                            <div className="col" style={{ textAlign:"right"}} >posts</div>
                            <div className="col" style={{ textAlign:"left"}}>last post about an hour ago</div>
                        </div>
                        </div>
                     </div>
                    </div>
                    <div className ="col-md-6" style ={{ height : "200px" , backgroundImage : "radial-gradient(at 30% top, rgba(7, 56, 68, 1) 0%, rgba(3,37,65, 1) 100%)" ,margin:"30px"}}>
                     <div className ="col-md-12" style={{height : "200px" ,marginLeft:"-15px", backgroundImage: "url(" + "https://www.themoviedb.org/assets/2/v4/taw/2016/blue_pipes-25a1dc12e797c6bec77b13a40062485214021acc7168f03fa7983ce0c10c14d3.svg" + ")" , backgroundPositionX : "-150px" , backgroundPositionY:"-460px"}}>
                     <h3 style={{paddingTop:"50px" , fontWeight:"700px" }}>Recent TV Discussions</h3>

                     <div class="container">
                        <div className="row">
                            <div className="col" style={{ textAlign:"right"}}>15,962</div>
                            <div className="col" style={{ textAlign:"left"}}>Floki has been found...</div>
                            <div className="w-100"></div>
                            <div className="col" style={{ textAlign:"right"}} >posts</div>
                            <div className="col" style={{ textAlign:"left"}}>last post about 2 hour ago</div>
                        </div>
                        </div>
                     </div>
                    </div>
                </div>
                <div style={{ display : "flex" , color:"white" , textAlign:"center"}}>
                    <div className ="col-md-6" style ={{ height : "200px" , backgroundImage : "radial-gradient(at 30% top, rgba(64, 29, 56, 1) 0%, rgba(3,37,65, 1) 100%)" ,margin:"30px"}}>
                     <div className ="col-md-12" style={{height : "200px" ,marginLeft:"10px", backgroundImage: "url(" + "https://www.themoviedb.org/assets/2/v4/marketing/red_pipes-594140f35efb300741add9827cc4f41053b0a4bb7ba249a40375377cc9d22d47.svg" + ")" , backgroundPositionX : "-720px" , backgroundPositionY:"-160px"}}>
                     <h3 style={{paddingTop:"50px" , fontWeight:"700px" }}>Recent Movie Discussions</h3>

                     <div class="container">
                        <div className="row">
                            <div className="col" style={{ textAlign:"right"}}>8,156</div>
                            <div className="col" style={{ textAlign:"left"}}>Operation Warp Speed ...</div>
                            <div className="w-100"></div>
                            <div className="col" style={{ textAlign:"right"}} >posts</div>
                            <div className="col" style={{ textAlign:"left"}}>last post about 3 hour ago</div>
                        </div>
                        </div>
                     </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Discuss