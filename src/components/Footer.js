import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Cảm ơn bạn đã xem đến phần cuối của web
                </p>
                <p className='footer-subscription-text'>
                    なつ - うみ - そら - くも - かぜ
                    <br />
                    Hẹn gặp lại bạn!
                </p>
                
                <div className='footer-donation'>
                    <p className='footer-donation-header'>Ủng hộ leonhoccode. Mua tặng mình một ly trà.</p>

                    <p className='footer-donation-paragraph'>Ngân hàng: Sacombank (Chi nhánh Sóc Trăng)</p>
 
                    <p className='footer-donation-paragraph'>Số tài khoản: 0701 1460 4321</p>
                     
                    <p className='footer-donation-paragraph'>Chủ tài khoản: Nguyen Trong Phuc</p>

                </div>
                
                {/* <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Gửi lời cảm ơn</Button>
                    </form>
                </div> */}
            </section>
            {/* <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div> */}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            leonhoccode
                            <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>leonhoccode © 2022</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to={{pathname: 'https://www.facebook.com/leonhocdaihoc'}}
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link tiktok'
                            to={{pathname: 'https://www.tiktok.com/@leonhoccode'}}
                            target='_blank'
                            aria-label='Tiktok'
                        >
                            <i className='fab fa-tiktok' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to={{pathname:'https://www.youtube.com/channel/UCszwPBrLwFEQ6ywypy_y8FA'}}
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to={{pathname: 'https://www.linkedin.com/in/trong-phuc/'}}
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer