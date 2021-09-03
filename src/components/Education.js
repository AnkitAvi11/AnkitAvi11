const Education = () => {
    return (
        <div className="container">
            
            <div className="row">
                <div className="d-flex justify-content-between align-items-center col-sm-8" style={{margin:"auto"}}>
                    <h2>Education qualifications</h2>
                    <a href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer" className="btn btn-warning">Download CV</a>
                </div>
                <div className="card col-sm-8" style={{margin:"auto", marginTop : "15px"}}>
                    <div className="card-body">
                    <ul className="list list-timeline">
                        <li>
                            <div className="list-timeline-icon bg-red">
                                <img src="https://media-exp1.licdn.com/dms/image/C510BAQG8EfzhFHkfRQ/company-logo_200_200/0/1541765629240?e=1639008000&v=beta&t=1qRwrmHSju7F19zk6cVpSZRXcG0wI1uH2VzNZzK7QrM" alt="nhce" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2019-2022 (Present) </div>
                            <p className="list-timeline-title">New Horizon College of Engineering, Bengaluru</p>
                            <p className="text-muted">Pursuing my Master of Computer Applications (MCA) fron New Horizon Horizon College of Engineering. </p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-red">
                                <img src="https://media-exp1.licdn.com/dms/image/C510BAQE1eCiU5qZBPg/company-logo_200_200/0/1566719490305?e=1639008000&v=beta&t=c0u1hpNYrIDXKl7r0OCy5R2ztsZK_pFPr3ge1x0Yt0A" alt="bit_mesra" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2016-2019</div>
                            <p className="list-timeline-title">Birla Institute of Technology, Mesra, Ranchi</p>
                            <p className="text-muted">A full time graduate in Bachelor of Computer Applications from BIT, Mesra, Ranchi Campus with an overall CGPA of 8.2</p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-success">
                                <img src="https://media-exp1.licdn.com/dms/image/C560BAQEo1o3qMmMS-g/company-logo_200_200/0/1562868073315?e=1639008000&v=beta&t=xoeADRjsHYynIQVrcIqhZsy7_5wrcbLh9y7donhorSA" alt="davimage" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">TATA DAV Public School (2015-16)</div>
                            <p className="list-timeline-title">12th Boards CBSE (Science)</p>
                            <p className="text-muted">Completed my High school with an overall aggregate of 83.2% (PCMCSc)</p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-success">
                                <img src="https://media-exp1.licdn.com/dms/image/C560BAQEo1o3qMmMS-g/company-logo_200_200/0/1562868073315?e=1639008000&v=beta&t=xoeADRjsHYynIQVrcIqhZsy7_5wrcbLh9y7donhorSA" alt="davimage" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">TATA DAV Public School (2013-14)</div>
                            <p className="list-timeline-title">10th Boards CBSE</p>
                            <p className="text-muted">Completed my High school with an overall aggregate of 93.2% (9.8 CGPA)</p>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="d-flex justify-content-between align-items-center col-sm-8" style={{margin:"auto", marginTop:"15px"}}>
                    <h2 style={{textAlign:"center"}}>Achievements and other activities</h2>
                </div>
                <div className="card col-sm-8" style={{margin:"auto", marginTop : "15px"}}>
                    <div className="card-body">
                    <ul className="list list-timeline">
                        <li>
                            <div className="list-timeline-icon bg-red">
                                <img src="https://media-exp1.licdn.com/dms/image/C560BAQGWZ7p_vSxYIA/company-logo_100_100/0/1626808359459?e=1639008000&v=beta&t=ee0aGDLdwDkzx9QC4ecot7IGJX6Voi5r-wihif1rRqI" alt="nhce" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2021</div>
                            <p className="list-timeline-title">Problem Solving Certification (Basics)</p>
                            <p className="text-muted">Got problem solving certification from HackerRank. <a href="https://www.hackerrank.com/certificates/7f5103fb07b2">Link to view</a> </p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-red">
                                <img src="https://media-exp1.licdn.com/dms/image/C560BAQGWZ7p_vSxYIA/company-logo_100_100/0/1626808359459?e=1639008000&v=beta&t=ee0aGDLdwDkzx9QC4ecot7IGJX6Voi5r-wihif1rRqI" alt="nhce" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2021</div>
                            <p className="list-timeline-title">React Developer (Basics) Certification</p>
                            <p className="text-muted">Got React beginner level certification from Hackerrank. <a href="https://www.hackerrank.com/certificates/7a65d0980833">Link to view</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-success">
                                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1639008000&v=beta&t=IQKie6oVigksBvByqwgN042CJjIxgrkZCJEVCmKhpzU" alt="davimage" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2021</div>
                            <p className="list-timeline-title">Coursera (Algorithmic ToolBox)</p>
                            <p className="text-muted">Scored 70% above in the Coursera Algorithmic Toolbox course.</p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-red">
                                <img src="https://media-exp1.licdn.com/dms/image/C560BAQGWZ7p_vSxYIA/company-logo_100_100/0/1626808359459?e=1639008000&v=beta&t=ee0aGDLdwDkzx9QC4ecot7IGJX6Voi5r-wihif1rRqI" alt="nhce" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2021</div>
                            <p className="list-timeline-title">Java (Intermediate) Certificate</p>
                            <p className="text-muted">Got certificate for Java Programming in Hackerrank.</p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-red">
                                <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFvx45x7j4Zhg/company-logo_200_200/0/1519864832328?e=1639008000&v=beta&t=96E5eCg4ttYy6247j_ZQ7yvxLoyZs-VISv-7WzrEmCE" alt="nhce" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2020 - Present</div>
                            <p className="list-timeline-title">3 - Star on LeetCode</p>
                            <p className="text-muted">I love to solve DSA problems on Leetcode with a 3 star on this platform.</p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-red">
                                <img src="https://media-exp1.licdn.com/dms/image/C560BAQGWZ7p_vSxYIA/company-logo_100_100/0/1626808359459?e=1639008000&v=beta&t=ee0aGDLdwDkzx9QC4ecot7IGJX6Voi5r-wihif1rRqI" alt="nhce" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2020 - Present</div>
                            <p className="list-timeline-title">5 star in Problem solving, Java, Python, SQL and JavaScript</p>
                            <p className="text-muted">Achieved 5 star in Problem solving practice problems, java practice problems and other languages as well.</p>
                            </div>
                        </li>
                        <li>
                            <div className="list-timeline-icon bg-red">
                                <img src="https://media-exp1.licdn.com/dms/image/C560BAQHt0ngxiIPJzw/company-logo_200_200/0/1627475176558?e=1639008000&v=beta&t=mMQcQOG4jDJf4KFyVb7znAIc0-LOmBJIkSytQwAqkrw" alt="nhce" />
                            </div>
                            <div className="list-timeline-content">
                            <div className="list-timeline-time">2020 - Present</div>
                            <p className="list-timeline-title">Level 65 - Programmer on Binary Search</p>
                            <p className="text-muted">Currently on Level 65 on Binary Search DSA problems solving platform.</p>
                            </div>
                        </li>
                    </ul>
                    <hr/>
                    <p style={{textAlign : "center"}}>                        
                        To know more download my CV by clicking on the button below. <br/><br/>
                        <a href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noreferrer" className="btn btn-warning">Download CV</a>
                    </p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Education;