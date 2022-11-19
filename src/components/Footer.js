import React from 'react';

const socialMediaArray = [{media:"instagram" , icon:"fa fa-instagram"},
                          {media:"facebook" , icon:"fa fa-facebook-square"},
                          {media:"github" , icon:"fa fa-github"}];
export function Footer(props) {
    const socialMediaBar = socialMediaArray.map((elem) => {
        return (
            <li class="ms-3">
                <a href="#"><i class="{elem.icon}" aria-label="{elem.media}"></i></a>
            </li>
        )
    });

    return(
        <footer class="py-2">
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 TeamBA with love and passion.</p>
            <ul class="list-unstyled d-flex">
                {socialMediaBar}
            </ul>
            </div>
        </footer>
    );
}