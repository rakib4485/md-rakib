
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaInstagram,  FaLinkedinIn } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/rakib4485"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/md-rakibul1/"},
    {icon: <FaFacebookF/>, path: "https://www.facebook.com/profile.php?id=100017740156035"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/mdrakib44854/"},
]

const Social = ({containStyle, iconStyle}) => {
    return (
        <div className={containStyle}>
            {
                socials.map((item, index) => {
                    return <Link key={index} className={iconStyle} href={item.path} target="_blak">
                    {item.icon}
                    </Link>
                })
            }
        </div>
    );
};

export default Social;