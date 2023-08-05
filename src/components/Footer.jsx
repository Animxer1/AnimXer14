import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
    return (
        <section id='footer' className='footer'>
            <div className='container container__footer'>
                <h1>
                    <Link to='/'>
                        AnimXer
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link to='/terms'>
                            Terms of Service 
                        </Link>
                    </li>
                    <li className='bulletpoints'>
                        •
                    </li>
                    <li>
                        <Link to='/dmca'>
                            DMCA
                        </Link>
                    </li>
                    <li className='bulletpoints'>
                        •
                    </li>
                    <li>
                        <a href='https://www.facebook.com/profile.php?id=100069572806122' 
                            className='Facebook-icon'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Facebook Page 
                        </a>
                    </li>
                </ul>
                <p>
                    The website does not host any files on its server. Instead, it provides links to media content that are hosted on third-party services.
                </p>
                <ul>
                    <li>&copy; AnimXer </li>
                    <li className='bulletpoints'>
                        •
                    </li>
                    <li>2023</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer
