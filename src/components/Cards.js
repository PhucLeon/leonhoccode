import React from 'react'
import CardItemLinkOut from './CardItemLinkOut'
import CardItemLinkInside from './CardItemLinkInside'
import './Cards.css'
import { useRef } from 'react'

function Cards() {
    const cardsRef = useRef(null);

    return (
        <div ref={cardsRef} className='cards'>
            <h1>Chào mừng bạn, Khám phá bên dưới nha ^^!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemLinkOut
                            src={process.env.PUBLIC_URL + '/images/pic_1.jpg'}
                            text='Đây là blog nói về những trải nghiệm cuộc sống và học tập của mình'
                            label='Blog'
                            path='https://phucleon.blogspot.com/'
                        />
                        <CardItemLinkOut
                            src={process.env.PUBLIC_URL + '/images/pic_2.jpg'}
                            text='Đây là Biolink, nơi tóm gọn những trang social media của mình'
                            label='Biolink'
                            path='https://bio.link/nguyentr0g'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItemLinkInside
                            src={process.env.PUBLIC_URL + '/images/pic_7.jpg'}
                            text='Đây là một số khóa học về lập trình do mình soạn' //12
                            label='Services'
                            path='/services'
                        />
                        <CardItemLinkInside
                            src={process.env.PUBLIC_URL + '/images/pic_5.jpg'}
                            text='Đây là Shop áo thun liên quan đến chủ đề lập trình'
                            label='LeonShop'
                            path='/products'
                        />
                        <CardItemLinkOut
                            src={process.env.PUBLIC_URL + '/images/pic_6.jpg'}
                            text='Đây là page, mình thường tổ chức sự kiện trên này'
                            label='F-Page'
                            path='https://www.facebook.com/leonhocdaihoc'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards