import { ReactComponent as Tele } from '../images/icons8-telegram-app.svg'
import { ReactComponent as Email } from '../images/icons8-github-squared.svg'
import { ReactComponent as Github } from '../images/icons8-gmail-logo.svg'
import { ReactComponent as Linedin } from '../images/icons8-linkedin.svg'

const Footer = () => {
    return (  
        <footer className="footer">
            <p className="footer-auther">This Website is done by<br/>Abdullah Salah</p>
            <div className="footer-accounts">
                <a href="https://www.linkedin.com/in/abdullah-salah-29209b235"><Linedin className="footer-accounts-img"/>Abdullah Salah</a>
                <a href="mailto:asr12211@outlook.com"><Email className="footer-accounts-img"/>asr12211<wbr/>@outlook.com</a>
                <a href="https://github.com/ASR1221"><Github className="footer-accounts-img"/>ASR1221</a>
                <a href="https://t.me/asr_1221"><Tele className="footer-accounts-img"/>asr_1221</a>
            </div>
        </footer>
    );
}
 
export default Footer;