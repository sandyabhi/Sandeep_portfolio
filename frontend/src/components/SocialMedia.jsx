import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
        <a href="https://github.com/sandyabhi">
          <span class="link"></span>
        </a>
      </div>
      <div>
        <BsLinkedin />
        <a href="https://www.linkedin.com/in/sandeep-kumar-patel47">
          <span class="link"></span>
        </a>
      </div>
      <div>
        <FaDev />
        <a href="https://dev.to/sandyabhi">
          <span class="link"></span>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
