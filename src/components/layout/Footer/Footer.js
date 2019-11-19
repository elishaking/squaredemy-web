import React from 'react';
import './Footer.scss';

export default function Footer({ bg = "#fff" }) {
  return (
    <footer style={{ color: bg === "#fff" ? "#000" : "#fff" }} className="footer container">
      <div className="content">
        <div className="left">
          <h1 className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 53 46.984">
              <g id="Group_604" data-name="Group 604" transform="translate(-658.05 -174.77)">
                <path id="Path_999" data-name="Path 999" d="M711.05,197.362c0,10.263-8.026,18.928-19.02,21.68a1.3,1.3,0,0,1-1.371-2.019,12.918,12.918,0,0,0,2.326-7.588c0-6.076-3.774-11-8.43-11s-8.43,4.925-8.43,11a12.918,12.918,0,0,0,2.327,7.589,1.3,1.3,0,0,1-1.368,2.021,29.269,29.269,0,0,1-3.655-1.171,1.9,1.9,0,0,0-1.754.185l-5.219,3.485a1.178,1.178,0,0,1-1.827-1.183l1.012-5.984a1.9,1.9,0,0,0-.588-1.714,20.821,20.821,0,0,1-7-15.3c0-12.477,11.864-22.592,26.5-22.592S711.05,184.885,711.05,197.362Z" transform="translate(0 0)" fill={bg === "#fff" ? "#5f8fee" : "#fff"} />
              </g>
            </svg>

            <span>Squaredemy</span>
          </h1>

          <p>The most productive way to learn</p>

          <div className="social">
            <a href="https://web.facebook.com/skyblazar">
              <svg id="facebook_176_" data-name="facebook [#176]" xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 16.145 32.289">
                <g id="Dribbble-Light-Preview">
                  <g id="icons">
                    <path id="facebook-_176_" data-name="facebook-[#176]" d="M340.012,7271.29v-14.53h4.412l.72-6.458h-5.132v-3.148c0-1.662.044-3.309,2.367-3.309h2.354v-4.617a26.589,26.589,0,0,0-4.067-.227c-4.272,0-6.947,2.68-6.947,7.588v3.713H329v6.458h4.719v14.53Z" transform="translate(-329 -7239)" fill="#5f8fee" fill-rule="evenodd" />
                  </g>
                </g>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/elishaking">
              <svg id="linkedin_161_" data-name="linkedin [#161]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 34 34">
                <g id="Dribbble-Light-Preview">
                  <g id="icons">
                    <path id="linkedin-_161_" data-name="linkedin-[#161]" d="M158,7353h-6.8v-11.9c0-3.264-1.44-5.083-4.022-5.083-2.81,0-4.478,1.9-4.478,5.083V7353h-6.8v-22.1h6.8v2.482a8.2,8.2,0,0,1,6.941-3.74c4.809,0,8.359,2.941,8.359,9.01V7353Zm-29.849-25.637a4.182,4.182,0,1,1,4.15-4.182,4.165,4.165,0,0,1-4.15,4.182ZM124,7353h8.5v-22.1H124Z" transform="translate(-124 -7319.001)" fill="#5f8fee" fill-rule="evenodd" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <p>Copyright &copy; <a href="https://skyblazar.com">Skyblazar</a>, All Rights Reserved</p>
    </footer>
  )
}
