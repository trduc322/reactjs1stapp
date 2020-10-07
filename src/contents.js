import React from 'react';

class Contents extends React.Component{
    render(){
        let style = {
            width: "1300px",
            height: "800px",
            backgroundColor: "#ffffff"
        }
        return(
            <form style={style} name= "contents">
                <Title/>
                <br></br>
               
                <Blogs {...this.props}/>
                <Blogs {...this.props}/>
                <Blogs {...this.props}/>
                <Blogs {...this.props}/>
                <Blogs {...this.props}/>
            </form>
        );
    }
}

function Blogs(props){
    let style = {
        marginTop : "10px",
        textAlign: "left"
    }
    return (
        <div id="blogs" style = {style}>
            <img src = "omgegalul.jpg" height = "125" width = "200"></img>
            <div className = "content">
                <div>
                <p id = "title">Bài đăng</p>
                <p id = "cont">Bài đăng này nói về nội dung ABC ...</p>
                <p id = "posted-by">Posted by Nguyen Van A | Th10 1 2020 | JavaScript</p>
                </div>
                <button id = "button">Read more</button>
            </div>
        </div>
    )
}

function Title(props){
    let style = {
        textAlign: "left",
        marginLeft: "20px",
        fontSize: "20px",
        color: "#000000",
        width: "800px",
        backgroundColor: "#ffffff"
        
    }
    return (<div style = {style}>
                SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO
        </div>)
}

export default Contents;