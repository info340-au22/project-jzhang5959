import React, { useState } from 'react';
import {Link } from 'react-router-dom';

export default function PhotoEdition({edit}) {
    const [image, updateImage] = useState('img/female-1.png');
    const [gender, updateG] = useState("girl");
    const [sentence, setSent] = useState("");
    const [name, updateName] = useState("");

    const photos = [{name:'female-1', value:'img/female-1.png'}, 
    {name:'female-2', value:'img/female-2.png'}, 
    {name:'female-3', value:'img/female-3.png'}, 
    {name:'female-4', value:'img/female-4.png'},
    {name:'female-5', value:'img/female-5.png'},
    {name:'female-6', value:'img/female-6.png'},
    {name:'male-1', value:'img/male-1.png'},
    {name:'male-2', value:'img/male-2.png'},
    {name:'male-3', value:'img/male-3.png'},
    {name:'male-4', value:'img/male-4.png'},
    {name:'male-5', value:'img/male-5.png'},
    {name:'male-6', value:'img/male-6.png'}
];
    const nameChange = (event) => {
        const name = event.target.value;
        updateName(name);
    }


    const genderChange = (event) => {
        const gender = event.target.value;
        updateG(gender);
    }

    const sentenceChange = (event) => {
        const sentence = event.target.value;
        setSent(sentence);
    }

    const choices = photos.map((elem) => {
        return (
                <option className="value" value={elem.value} key={elem.name}>{elem.name}
                </option> 
        ); 
    })

    const imageChange = (event) => {
        const image = event.target.value;
        updateImage(image);
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        edit(name, image, gender, sentence);
    }

    return (
        <div className="container">
            <header>
            <div className="container dash-border-light-bg">
                <h1 className='primary-dark-color'>Edit Info</h1>
            </div>
            </header>

            <main className="login-profile">
            <form id="login">
                <div className="container" id="front">
                    <label key="name" id="label-name" onChange={nameChange}>UserName</label>
                    <input type="name"
                        id="name"
                        placeholder="Enter Your New UserName" 
                        value={name} 
                        onChange={nameChange}/>
                </div>

                <div className="container photo-container">
                    <h2>Change your picture</h2>
                    <img src={image} alt="profile photo"/>
                    <p><label key="photo" id="photo">
                    Which picture do you perfer?
                    </label>
                    <select className="choice" id="photo-choice" value={image}  onChange={imageChange}>
                        {choices}
                    </select></p>
                </div>

                <div className="container" id="front">
                    <label key="gender" id="label-gender" onChange={genderChange}>Gender</label>
                    <select className="gender" id="gender-choice" value={gender}  onChange={genderChange}>
                        <option className="value" value="girl" key="girl">girl</option>
                        <option className="value" value="boy" key="boy">boy</option>
                        <option className="value" value="woman" key="woman">woman</option>
                        <option className="value" value="man" key="man">man</option>
                    </select>
                </div>

                <div className="container" id="front">
                    <label key="bio" id="label-bio" onChange={sentenceChange}>Status / Bio</label>
                    <input type="bio"
                        id="bio"
                        placeholder="Enter Whatever You Want To Say" 
                        value={sentence} 
                        onChange={sentenceChange}/>
                </div>

                <div className="container d-flex justify-content-center">
                    <button className="primary-bt" id="save" type="save" value="save" onClick={handleSubmit}><Link to='/profile'>
                    Save
                    </Link></button>
                </div>
            </form>
            </main>
        </div>
    )
}
