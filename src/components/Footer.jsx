/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo-box">
              <Link to="/">
                <img className="logo-box__logo" src="/logo.png" alt="Visit tskaltubo logo" />
              </Link>
              <p className="logo-box__slogan">
                <span>წყალტუბოს</span>
                <span>ტურიზმის</span>
                <span>ცენტრი</span>
              </p>
            </div>
            <p className="footer-info-text">
              წყალტუბო ქალაქი საქართველოში,
              წყალტუბოს მუნიციპალიტეტის ადმინისტრაციული ცენტრია.
            </p>

            <ul className="footer-info-social-list">
              <li className="footer-info-social-item">
                <a href="" className="footer-info-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 8.47609H13.5944V6.40033C13.5944 5.62078 14.1503 5.43904 14.5419 5.43904C14.9326 5.43904 16.9452 5.43904 16.9452 5.43904V2.01201L13.6353 2C9.96107 2 9.12491 4.55599 9.12491 6.19168V8.47609H7V12.0075H9.12491C9.12491 16.5394 9.12491 22 9.12491 22H13.5944C13.5944 22 13.5944 16.4856 13.5944 12.0075H16.6102L17 8.47609Z" fill="white" />
                  </svg>
                </a>
              </li>
              <li className="footer-info-social-item">
                <a href="" className="footer-info-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.002 7.38503C9.44808 7.38503 7.38806 9.4455 7.38806 12C7.38806 14.5545 9.44808 16.615 12.002 16.615C14.5559 16.615 16.616 14.5545 16.616 12C16.616 9.4455 14.5559 7.38503 12.002 7.38503ZM12.002 15.0003C10.3516 15.0003 9.00234 13.6548 9.00234 12C9.00234 10.3452 10.3476 8.99967 12.002 8.99967C13.6564 8.99967 15.0017 10.3452 15.0017 12C15.0017 13.6548 13.6524 15.0003 12.002 15.0003ZM17.8809 7.19625C17.8809 7.79471 17.399 8.27268 16.8047 8.27268C16.2064 8.27268 15.7285 7.79069 15.7285 7.19625C15.7285 6.60181 16.2104 6.11983 16.8047 6.11983C17.399 6.11983 17.8809 6.60181 17.8809 7.19625ZM20.9368 8.28874C20.8685 6.84681 20.5392 5.56956 19.4831 4.51724C18.431 3.46491 17.154 3.13556 15.7124 3.06326C14.2267 2.97891 9.77334 2.97891 8.28756 3.06326C6.84997 3.13154 5.57301 3.46089 4.5169 4.51322C3.46079 5.56555 3.13553 6.8428 3.06325 8.28473C2.97892 9.77084 2.97892 14.2251 3.06325 15.7113C3.13151 17.1532 3.46079 18.4304 4.5169 19.4828C5.57301 20.5351 6.84596 20.8644 8.28756 20.9367C9.77334 21.0211 14.2267 21.0211 15.7124 20.9367C17.154 20.8685 18.431 20.5391 19.4831 19.4828C20.5352 18.4304 20.8645 17.1532 20.9368 15.7113C21.0211 14.2251 21.0211 9.77485 20.9368 8.28874ZM19.0173 17.3058C18.7041 18.093 18.0977 18.6995 17.3066 19.0168C16.122 19.4868 13.3111 19.3783 12.002 19.3783C10.6929 19.3783 7.87797 19.4828 6.69738 19.0168C5.91032 18.7036 5.30396 18.0971 4.98673 17.3058C4.5169 16.1209 4.62532 13.3094 4.62532 12C4.62532 10.6906 4.52091 7.87504 4.98673 6.69419C5.29994 5.90695 5.9063 5.30046 6.69738 4.98315C7.88199 4.51322 10.6929 4.62167 12.002 4.62167C13.3111 4.62167 16.126 4.51724 17.3066 4.98315C18.0937 5.29644 18.7001 5.90293 19.0173 6.69419C19.4871 7.87906 19.3787 10.6906 19.3787 12C19.3787 13.3094 19.4871 16.125 19.0173 17.3058Z" fill="white" />
                  </svg>
                </a>
              </li>
              <li className="footer-info-social-item">
                <a href="" className="footer-info-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.8832 7.98166C20.8832 6.39941 19.7193 5.12658 18.2812 5.12658C16.3333 5.03516 14.3467 5 12.3179 5C12.2124 5 12.1069 5 12.0015 5C11.896 5 11.7905 5 11.685 5C9.65973 5 7.66961 5.03516 5.72169 5.12658C4.28712 5.12658 3.12328 6.40644 3.12328 7.98869C3.03538 9.24043 2.9967 10.4922 3.00022 11.7439C2.9967 12.9956 3.03538 14.2474 3.11977 15.5026C3.11977 17.0849 4.2836 18.3683 5.71817 18.3683C7.76455 18.4632 9.86367 18.5054 11.9979 18.5019C14.1357 18.5089 16.2278 18.4667 18.2777 18.3683C19.7158 18.3683 20.8796 17.0849 20.8796 15.5026C20.964 14.2474 21.0027 12.9956 20.9992 11.7404C21.0062 10.4886 20.9675 9.23691 20.8832 7.98166ZM10.2786 15.1932V8.28405L15.3769 11.7369L10.2786 15.1932Z" fill="white" />
                  </svg>
                </a>
              </li>
              <li className="footer-info-social-item">
                <a href="" className="footer-info-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.524 10.7756L19.481 4H18.0696L12.8948 9.88195L8.76466 4H4L10.2469 12.8953L4 20H5.41143L10.8728 13.787L15.2353 20H20L13.524 10.7756ZM11.5902 12.9734L10.9563 12.0871L5.92043 5.04117H8.08867L12.154 10.7296L12.7852 11.6159L18.0689 19.0096H15.9006L11.5902 12.9734Z" fill="white" />
                  </svg>
                </a>
              </li>
              <li className="footer-info-social-item">
                <a href="" className="footer-info-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 19H5V9H8V19ZM19 19H16V13.658C16 12.266 15.504 11.573 14.521 11.573C13.742 11.573 13.248 11.961 13 12.738C13 14 13 19 13 19H10C10 19 10.04 10 10 9H12.368L12.551 11H12.613C13.228 10 14.211 9.322 15.559 9.322C16.584 9.322 17.413 9.607 18.046 10.323C18.683 11.04 19 12.002 19 13.353V19Z" fill="white" />
                    <path d="M6.49922 8C7.35526 8 8.04922 7.32843 8.04922 6.5C8.04922 5.67157 7.35526 5 6.49922 5C5.64318 5 4.94922 5.67157 4.94922 6.5C4.94922 7.32843 5.64318 8 6.49922 8Z" fill="white" />
                  </svg>
                </a>
              </li>
              <li className="footer-info-social-item">
                <a href="" className="footer-info-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.0208 9.86833C21.255 8.8625 22 7.855 22 7.855H18.6567C16.7808 6.6425 14.5058 6 11.9792 6C9.3625 6 6.9975 6.65 5.13417 7.87583H2C2 7.87583 2.7375 8.86417 2.975 9.86417C2.365 10.7033 2.0025 11.7158 2.0025 12.8283C2.0025 15.5917 4.25 17.835 7.0125 17.835C8.58833 17.835 9.98833 17.0975 10.9133 15.9567L11.9758 17.5533L13.0517 15.94C13.5267 16.5533 14.1517 17.0533 14.8892 17.39C16.1017 17.94 17.4658 18.0033 18.7158 17.54C21.3042 16.5783 22.6292 13.6892 21.6792 11.1017C21.505 10.6383 21.2792 10.2258 21.0042 9.86417L21.0208 9.86833ZM18.3783 16.595C17.3783 16.9658 16.2908 16.9242 15.32 16.4758C14.6333 16.1567 14.0675 15.6575 13.6633 15.0367C13.4958 14.7875 13.3508 14.5175 13.2442 14.2275C13.1225 13.8983 13.0608 13.5583 13.0283 13.215C12.9667 12.5217 13.0658 11.8208 13.3658 11.1708C13.8158 10.2008 14.6167 9.46167 15.6167 9.09083C17.6917 8.32917 19.9917 9.39167 20.755 11.4583C21.5183 13.5258 20.455 15.8292 18.3925 16.5942L18.3783 16.595ZM10.3217 15.0667C9.6025 16.1258 8.38667 16.8275 7.01083 16.8275C4.80583 16.8275 3.01 15.0308 3.01 12.83C3.01 10.6292 4.80667 8.82833 7.01083 8.82833C9.215 8.82833 11.0092 10.6292 11.0092 12.83C11.0092 12.9667 10.9842 13.0917 10.9692 13.2292C10.9017 13.905 10.685 14.5425 10.3217 15.08V15.0667ZM4.47 12.7775C4.47 14.145 5.58333 15.2533 6.94583 15.2533C8.30833 15.2533 9.41917 14.145 9.41917 12.7775C9.41917 11.415 8.30833 10.3075 6.9475 10.3075C5.58417 10.3075 4.47167 11.415 4.47167 12.7775H4.47ZM14.51 12.7775C14.51 14.145 15.6175 15.2533 16.9833 15.2533C18.3467 15.2533 19.4542 14.145 19.4542 12.7775C19.4542 11.415 18.3467 10.3075 16.9833 10.3075C15.6208 10.3075 14.5075 11.415 14.5075 12.7775H14.51ZM11.975 6.875C13.7758 6.875 15.4008 7.19917 16.8267 7.84333C16.2892 7.85833 15.7642 7.9525 15.2383 8.14333C13.9758 8.60583 12.9758 9.53083 12.4258 10.7475C12.1633 11.2975 12.0258 11.88 11.975 12.4683C11.7875 9.905 9.675 7.8725 7.07417 7.82C8.5 7.20833 10.1508 6.875 11.9383 6.875H11.975Z" fill="white" />
                  </svg>
                </a>
              </li>
            </ul>

            <button className="footer-info-subscribe">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 9.1472V16.475C21 18.0347 19.7792 19.3093 18.241 19.3954L18.075 19.4H5.925C4.36527 19.4 3.09068 18.1792 3.00463 16.641L3 16.475V9.1472L11.6868 13.698C11.883 13.8006 12.117 13.8006 12.3132 13.698L21 9.1472ZM5.925 5H18.075C19.5912 5 20.8381 6.15372 20.9854 7.6312L12 12.338L3.01457 7.6312C3.15647 6.20844 4.31789 5.0859 5.75768 5.00471L5.925 5Z" fill="#414464" />
              </svg>

              გამოგვიწერე
            </button>
          </div>

          <nav className="footer-nav">
            <h3 className="footer-nav-title">
              ადგილები
            </h3>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  მღვიმეები
                </a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  სპა პროცედურები
                </a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  ველო ტური
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  ღვინის ტური/მასტერკლასი
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  არქიტექტურული ტური
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  ყურძნის კრეფა დაწურვა
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer-nav">
            <h3 className="footer-nav-title">
              ჩვენ შესახებ
            </h3>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  კონტაქტი
                </a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  კონფიდეციალურობის პოლიტიკა
                </a>
              </li>
              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  visittskaltubo.com -ის შესახებ
                </a>
              </li>

            </ul>
          </nav>

          <nav className="footer-nav">
            <h3 className="footer-nav-title">
              კონტაქტი
            </h3>
            <ul className="footer-nav-list">
              <li className="footer-nav-item footer-nav-item-with-icon">
                <span className="footer-nav-link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_536_4364)">
                      <path d="M5.52083 8.99583C6.72083 11.3542 8.65 13.2833 11.0125 14.4833L12.8458 12.6458C13.075 12.4167 13.4042 12.35 13.6917 12.4417C14.625 12.75 15.6292 12.9167 16.6667 12.9167C17.1292 12.9167 17.5 13.2875 17.5 13.75V16.6667C17.5 17.1292 17.1292 17.5 16.6667 17.5C8.84167 17.5 2.5 11.1583 2.5 3.33333C2.5 2.87083 2.875 2.5 3.33333 2.5H6.25C6.7125 2.5 7.08333 2.87083 7.08333 3.33333C7.08333 4.37083 7.25 5.375 7.55833 6.30833C7.65 6.59583 7.58333 6.925 7.35417 7.15417L5.52083 8.99583Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_536_4364">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                <a href="tel:+995595120777" className="footer-nav-link">
                  +995 595 12 07 77
                </a>
              </li>
              <li className="footer-nav-item footer-nav-item-with-icon">
                <span className="footer-nav-link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 9.1472V16.475C21 18.0347 19.7792 19.3093 18.241 19.3954L18.075 19.4H5.925C4.36527 19.4 3.09068 18.1792 3.00463 16.641L3 16.475V9.1472L11.6868 13.698C11.883 13.8006 12.117 13.8006 12.3132 13.698L21 9.1472ZM5.925 5H18.075C19.5912 5 20.8381 6.15372 20.9854 7.6312L12 12.338L3.01457 7.6312C3.15647 6.20844 4.31789 5.0859 5.75768 5.00471L5.925 5Z" fill="white" />
                  </svg>
                </span>
                <a href="mailto:info@visittskaltubo.com" className="footer-nav-link">
                  info@visittskaltubo.com
                </a>
              </li>
              <li className="footer-nav-item footer-nav-item-with-icon">
                <span className="footer-nav-link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.0007 1.66699C8.23254 1.66699 6.53685 2.36937 5.28661 3.61961C4.03636 4.86986 3.33398 6.56555 3.33398 8.33366C3.33398 12.7837 8.45898 18.3337 10.0007 18.3337C11.5423 18.3337 16.6673 12.7837 16.6673 8.33366C16.6673 6.56555 15.9649 4.86986 14.7147 3.61961C13.4645 2.36937 11.7688 1.66699 10.0007 1.66699ZM10.0007 11.667C9.34138 11.667 8.69691 11.4715 8.14875 11.1052C7.60059 10.739 7.17334 10.2184 6.92105 9.60927C6.66876 9.00018 6.60275 8.32996 6.73137 7.68336C6.85998 7.03675 7.17745 6.44281 7.64363 5.97664C8.1098 5.51046 8.70375 5.19299 9.35035 5.06437C9.99695 4.93576 10.6672 5.00177 11.2763 5.25406C11.8853 5.50635 12.4059 5.93359 12.7722 6.48176C13.1385 7.02992 13.334 7.67439 13.334 8.33366C13.334 9.21771 12.9828 10.0656 12.3577 10.6907C11.7326 11.3158 10.8847 11.667 10.0007 11.667Z" fill="white" />
                  </svg>
                </span>
                <address className="footer-nav-address">
                  ქ. წყალტუბო, ტაბიძის ქუჩა
                </address>

              </li>
            </ul>

            <div className="footer-nav-logo">
              <img src='/logo-municipality.png' alt='წყალტუბოს მუნიციპალიტეტის ლოგო' />
            </div>
          </nav>

        </div>



        <div className="footer-copy">
          <p className="footer-copy-text">Copyright © 2024</p>
          <p className="footer-test">საიტი სატესტო რეჟიმში გაეშვა 23.01.2024-დან</p>
          <p className="footer-copy-text">

            <a href="https://idearoom.ge/" target="_blank">
              დამზადებულია Idearoom - ში
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;