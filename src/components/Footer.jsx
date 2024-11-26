import { Link } from "react-router-dom"

export function Footer() {

    return <footer>
        <div className="container">
            <ul className="no-style-list grid main-wrap grid-cols-2">
                <li id="About">
                    <div className="footerListHeader">
                        About
                    </div>
                    <ul>
                        <li>
                            <Link to="/about-us">About us</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/news">News</Link>
                        </li>
                        <li>
                            <a href="https://myexam.allen.in/">MyExamEduBlogs</a>
                        </li>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/public-notice">Public notice</Link>
                        </li>
                        <li>
                            <Link to="/carrers">Careers</Link>
                        </li>
                    </ul>
                </li>
                <li id="help-support">
                    <div className="footerListHeader">
                        Help & Support
                    </div>
                    <ul>
                        <li>
                            <Link to="/refund-policy">Refund policy</Link>
                        </li>
                        <li>
                            <Link to="/transfer-policy">Transfer policy</Link>
                        </li>
                        <li>
                            <Link to="/tnc">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to="contact-us">Contact us</Link>
                        </li>
                    </ul>
                </li>
                <li id="popular-goals">
                    <div className="footerListHeader">
                        Popular goals
                    </div>
                    <ul>
                        <li>
                            <Link to="/neet-ug">Neet UG</Link>
                        </li>
                        <li>
                            <Link to="/transfer-policy">JEE Advanced</Link>
                        </li>
                        <li>
                            <Link to="/tnc">6th to 10th</Link>
                        </li>
                    </ul>
                </li>
                <li id="courses">
                    <div className="footerListHeader">
                        Courses
                    </div>
                    <ul>
                        <li>
                            <Link to="/ultimate-program-live-courses">Online Courses</Link>
                        </li>
                        <li>
                            <a href="https://dlp.allen.ac.in/">Distance Learning</a>
                        </li>
                        <li>
                            <Link to="/online-test-series">Online Test Series</Link>
                        </li>
                    </ul>
                </li>
                <li id="centers">
                    <div className="footerListHeader">
                        Centers
                    </div>
                    <ul>
                        <li>
                            <Link to="/kota">Kota</Link>
                        </li>
                        <li>
                            <Link href="/banglore">Banglore</Link>
                        </li>
                        <li>
                            <Link to="/indore">Indore</Link>
                        </li>
                        <li>
                            <Link to="/delhi">Delhi</Link>
                        </li>
                        <li>
                            <Link to="/allen-centers">More centers</Link>
                        </li>
                    </ul>
                </li>
                <li id="exam-information">
                    <div className="footerListHeader">
                        Exam information
                    </div>
                    <ul>
                        <li>
                            <Link to="/jee-main">Jee Main</Link>
                        </li>
                        <li>
                            <Link href="/jee-advanced">Jee Advanced</Link>
                        </li>
                        <li>
                            <Link to="/neet-ug">Neet UG</Link>
                        </li>
                        <li>
                            <Link to="/class-10">Class 10</Link>
                        </li>
                        <li>
                            <Link to="/class-12">Class 12</Link>
                        </li>
                        <li>
                            <Link to="/olympiad-exam">Olympiad Exam</Link>
                        </li>
                        <li>
                            <Link to="/neet-online-test-series">Neet Online Test Series</Link>
                        </li>
                        <li>
                            <Link to="/jee-online-test-seris">Jee Online Test Series</Link>
                        </li>
                        <li>
                            <Link to="/jee-main-online-test-series">Jee Main Online Test Series</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>
}