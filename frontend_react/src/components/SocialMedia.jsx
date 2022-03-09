import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
    return (
    <div className="app__social">
        <div>
            <a href="https://mobile.twitter.com/wev_dev"><BsTwitter/></a>
        </div>
        <div>
            <a href="https://instagram.com/wevertonbezzera?utm_medium=copy_link"><BsInstagram/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/weverton-bezerra-da-costa-061ab11a4/"><BsLinkedin/></a>
        </div>
        <div>
            <a href="https://github.com/wevertonbezzera013"><BsGithub/></a>
        </div>
    </div>
    )
}

export default SocialMedia