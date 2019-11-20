import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer container-nav">
      <div className="content">
        <div className="left">
          <h1 className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 53 46.984">
              <g id="Group_604" data-name="Group 604" transform="translate(-658.05 -174.77)">
                <path id="Path_999" data-name="Path 999" d="M711.05,197.362c0,10.263-8.026,18.928-19.02,21.68a1.3,1.3,0,0,1-1.371-2.019,12.918,12.918,0,0,0,2.326-7.588c0-6.076-3.774-11-8.43-11s-8.43,4.925-8.43,11a12.918,12.918,0,0,0,2.327,7.589,1.3,1.3,0,0,1-1.368,2.021,29.269,29.269,0,0,1-3.655-1.171,1.9,1.9,0,0,0-1.754.185l-5.219,3.485a1.178,1.178,0,0,1-1.827-1.183l1.012-5.984a1.9,1.9,0,0,0-.588-1.714,20.821,20.821,0,0,1-7-15.3c0-12.477,11.864-22.592,26.5-22.592S711.05,184.885,711.05,197.362Z" transform="translate(0 0)" fill="#fff" />
              </g>
            </svg>

            <span>Squaredemy</span>
          </h1>

          <p>The most productive way to learn</p>

          <div className="social">
            <a href="https://web.facebook.com/skyblazar" target="_blank" rel="noreferrer noopener">
              <svg id="facebook_176_" data-name="facebook [#176]" xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 16.145 32.289">
                <g id="Dribbble-Light-Preview">
                  <g id="icons">
                    <path id="facebook-_176_" data-name="facebook-[#176]" d="M340.012,7271.29v-14.53h4.412l.72-6.458h-5.132v-3.148c0-1.662.044-3.309,2.367-3.309h2.354v-4.617a26.589,26.589,0,0,0-4.067-.227c-4.272,0-6.947,2.68-6.947,7.588v3.713H329v6.458h4.719v14.53Z" transform="translate(-329 -7239)" fill="#fff" fillRule="evenodd" />
                  </g>
                </g>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/elishaking" target="_blank" rel="noreferrer noopener">
              <svg id="linkedin_161_" data-name="linkedin [#161]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 34 34">
                <g id="Dribbble-Light-Preview">
                  <g id="icons">
                    <path id="linkedin-_161_" data-name="linkedin-[#161]" d="M158,7353h-6.8v-11.9c0-3.264-1.44-5.083-4.022-5.083-2.81,0-4.478,1.9-4.478,5.083V7353h-6.8v-22.1h6.8v2.482a8.2,8.2,0,0,1,6.941-3.74c4.809,0,8.359,2.941,8.359,9.01V7353Zm-29.849-25.637a4.182,4.182,0,1,1,4.15-4.182,4.165,4.165,0,0,1-4.15,4.182ZM124,7353h8.5v-22.1H124Z" transform="translate(-124 -7319.001)" fill="#fff" fillRule="evenodd" />
                  </g>
                </g>
              </svg>
            </a>

            <a href="https://github.com/elishaking/squaredemy-web" target="_blank" rel="noreferrer noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.02em" height="1em" viewBox="0 0 94.672 92.334">
                <path id="bxl-github" d="M49.388,2A47.343,47.343,0,0,0,34.424,94.256c2.368.427,3.222-1.03,3.222-2.283,0-1.125-.038-4.105-.052-8.049-13.17,2.857-15.951-6.35-15.951-6.35-2.145-5.467-5.254-6.924-5.254-6.924-4.3-2.938.327-2.871.327-2.871,4.755.332,7.247,4.879,7.247,4.879C28.188,79.89,35.05,77.8,37.737,76.591A10.148,10.148,0,0,1,40.75,70.26c-10.507-1.191-21.556-5.254-21.556-23.4a18.341,18.341,0,0,1,4.86-12.7c-.479-1.2-2.117-6.018.47-12.529,0,0,3.972-1.277,13.013,4.846a44.8,44.8,0,0,1,23.692,0c9.046-6.127,13.013-4.846,13.013-4.846,2.587,6.511.963,11.328.47,12.529a18.226,18.226,0,0,1,4.86,12.7c0,18.191-11.058,22.187-21.6,23.359,1.685,1.462,3.2,4.347,3.2,8.761,0,6.331-.057,11.438-.057,12.99,0,1.267.845,2.738,3.26,2.273A47.342,47.342,0,0,0,49.388,2Z" transform="translate(-2.052 -2)" fill="#fff" fillRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <p>Copyright &copy; <a href="https://skyblazar.com">Skyblazar</a>,&nbsp;&nbsp;All Rights Reserved</p>
    </footer>
  )
}
