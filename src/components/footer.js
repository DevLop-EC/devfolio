import './sass/footer.scss';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
function Footer() {
  return (
    <footer>
      <div className="fb">
        <a href="https://github.com/DevLop-EC">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/christdevlop/">
          <LinkedIn />
        </a>

        <a href="https://twitter.com/codeandoandoec">
          <Twitter />
        </a>
      </div>
      <div className="fc">
        <a href="https://github.com/DevLop-EC">Built by Christian Lopez</a>
      </div>
    </footer>
  );
}
export default Footer;
