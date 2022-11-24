import React, { useState } from 'react';

export default function EditPhoto(props) {
    const [image, updateImage] = useState('img/female-1.png');

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

    return (
        <div>
            <form className="edit">
                <div className="container photo-container">
                    <img src={image} alt="profile photo"/>
                    <p><label key="photo" id="photo">
                        Change your picture   </label>
                    <select className="choice" id="photo-choice" value={image}  onChange={imageChange}>
                        {choices}
                    </select></p>
                </div>
            </form>
        </div>
    )
}
