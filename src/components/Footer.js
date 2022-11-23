import React from 'react';

const socialMediaArray = [{media:"instagram" , icon:"fa fa-instagram", link:"https://www.instagram.com/"},
                          {media:"facebook" , icon:"fa fa-facebook-square", link:"https://www.facebook.com/"},
                          {media:"github" , icon:"fa fa-github", link:"https://github.com/info340-au22/project-jzhang5959"}];
export function Footer(props) {
    const socialMediaBar = socialMediaArray.map((elem) => {
        return (
            <li className="ps-3" key={elem.media}>
                <a href={elem.link}><em className={elem.icon} aria-label={elem.media}></em></a>
            </li>
        )
    });

    return(
        <footer className="mx-3">
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 TeamBA with love and passion.</p>
            <ul className="list-unstyled d-flex">
                {socialMediaBar}
            </ul>
            </div>
        </footer>
    );
}