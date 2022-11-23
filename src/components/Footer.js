import React from 'react';

const socialMediaArray = [{media:"instagram" , icon:"fa fa-instagram"},
                          {media:"facebook" , icon:"fa fa-facebook-square"},
                          {media:"github" , icon:"fa fa-github"}];
export function Footer(props) {
    const socialMediaBar = socialMediaArray.map((elem) => {
        return (
            <li className="ps-3" key={elem.media}>
                <a href="#"><em className={elem.icon} aria-label={elem.media}></em></a>
            </li>
        )
    });

    return(
        <footer>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 TeamBA with love and passion.</p>
            <ul className="list-unstyled d-flex">
                {socialMediaBar}
            </ul>
            </div>
        </footer>
    );
}