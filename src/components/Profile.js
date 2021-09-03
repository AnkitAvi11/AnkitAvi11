const path = require('path');

const Profile = (props) => {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{background : `url(${path.join(process.env.PUBLIC_URL, 'images', 'ankit.jpg')})`, backgroundSize : "cover", backgroundPosition:"center", height:"125px", width:"125px",borderRadius : "50%", margin:"auto", marginBottom:"20px"}}></div>
            <div>
                <h1>Ankit Kumar</h1>
                <p ><a href="https://twitter.com/AnkitAvi11" target="_blank" rel="noreferrer">@AnkitAvi11 </a></p>
                <p style={{color:"grey"}}><i className="bi bi-code-square" style={{color:"orangered"}}></i> Aspiring and Passionate Full Stack Software Engineer. <i className="bi bi-geo-alt" style={{color:"orangered"}}></i> Bengaluru, India</p>
            </div>
            <div>
                <p style={{color:"grey"}}>I am Ankit Kumar, BCA graduate from BIT Mesra, Ranchi. I am currently pursuing my MCA from New Horizon College of Engineering, Bengaluru.</p>
                <p>
                    <span className="iconify" data-icon="simple-icons:leetcode" style={{color:'orange'}}></span> <a href="https://leetcode.com/Ankit_Avi_11/" target="_blank" rel="noreferrer">Leetcode Profile</a> &nbsp;
                    <span className="iconify" data-icon="la:hackerrank" style={{color:"green"}}></span> <a href="https://www.hackerrank.com/ankit_kumar_11" target="_blank" rel="noreferrer">HackerRank Profile</a>  &nbsp;
                    <span className="iconify" data-icon="octicon:file-binary-16" style={{color:"blue"}}></span> <a href="https://binarysearch.com/@/AnkitAvi11" target="_blank" rel="noreferrer">BinarySearch Profile</a> &nbsp;
                </p>
            </div>
        </div>
    )
}

export default Profile;