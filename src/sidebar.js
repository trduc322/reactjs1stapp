import React from 'react';

class Sidebar extends React.Component{
    
    render(){
        let style = {
           
        }
        return(
            <div style ={style} className = "sidebar">
                <Signup />
                <p id= "bvm">BÀI VIẾT MỚI</p>
                <News />
                <News />
                <News />
            </div>
        );
    }
}
function Signup(){
    return (<form id = "signup">
        <p id = "signup-title">ĐĂNG KÍ NHẬN BÀI VIẾT MỚI</p>
        <p>Hãy điền thông tin vào phần bên dưới để nhận được thông tin về những bài viết mới </p>
        <div>
            <input id = "name" placeholder = "Tên của bạn ..." ></input><br></br>
            <input id = "name" placeholder = "Mail của bạn ..." ></input><br></br>
        </div>
        <div>
            <input id = "dongy" type = "checkbox" ></input>
            <label>Tôi đồng ý với các điều khoản</label>
        </div>
        <button id = "signup-button">ĐĂNG KÍ</button>
    </form>);
}

function News(){
    let style = {
        marginTop : "10px",
        textAlign: "left"
    }
    return(
        
        <form id = "news" style = {style}>
            
            <img src = "omgegalul.jpg" height = "125" width = "200"></img>
            <div className = "new-content">
                <div>
                <p id = "new-title">Bài đăng</p>
                <p id = "new-cont">Bài đăng này nói về nội dung ABC ...</p>
                <p id = "new-posted-by">Posted by Nguyen Van A | Th10 1 2020 | JavaScript</p>
                </div>
                <button id = "new-button">Read more</button>
            </div>
        </form>
    );
}

export default Sidebar;