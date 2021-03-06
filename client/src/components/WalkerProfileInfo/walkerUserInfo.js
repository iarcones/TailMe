import React from "react";
import "../../index.css";
import profileEditIcon from "../../images/profileEditIcon.png";
import addPhotoIcon from "../../images/addPhotoIcon.png";


// Depending on the current path, make props set an "active" class on the appropriate navigation link item
// Maybe pass id of which link is clicked and reference this.props.style somehow...


function WalkerUserInfo(props) {
    const publicURL=`https://tail-me.herokuapp.com/publicProfile/${props.username}`
    return (
        <div className="walker-main-content">
            {/* <div className="walker-main-content__title">{props.userType} Profile</div> */}
            <div className="walker-main-content__title"> Profile</div>
            <div className="walker-main-content__subtitle">{props.firstName}  {props.lastName}</div>
            <div className="walker-main-content__availibility">{props.availibility}</div>
            <div className="walker-main-content__profilePhoto"><img className="walker-main-content__profilePhoto--image"src={props.profilePhotoURL}  ></img></div>
            <div className="walker-main-content__editInfo">
                <button className="walker-main-content__editInfo--button" onClick={props.handleEditUserClick}>
                <img className="walker-main-content__editInfo--profileEditIcon" src={profileEditIcon} alt="profile edit icon"></img>
                </button>
            </div>
            <div className="walker-main-content__photoUpload">
                <button className="walker-main-content__photoUpload--button"onClick={props.showWidget}>
                <img className="walker-main-content__photoUpload--addPhotoIcon" src={addPhotoIcon} alt="add photo icon"></img>
                </button>
            </div>
            <div className="walker-main-content__body">
                {/* <div className="main-content__body--profileimg"><img src={`data:image/jpeg;Base64,${this.state.profilePhoto}`} /></div> */}
                {/* <div className="walker-main-content__body--firstNameLabel">First Name:</div> */}
                <div className="walker-main-content__body--firstNameInput">{props.certifications}</div>
                {/* <div className="walker-main-content__body--lastNameLabel">Last Name:</div>
            <div className="walker-main-content__body--lastNameInput">{props.lastName}</div>
            <div className="walker-main-content__body--userTypeLabel">User Type:</div>
            <div className="walker-main-content__body--userTypeInput">{props.userType}</div> */}
                <div className="walker-main-content__body--aboutMeLabel">About me:</div>
                {/* <div><img src="http://res.cloudinary.com/viaro-networks-inc/image/upload/v1552544141/IMG_5409_zcbfmg.jpg" width="300" height="150"></img></div> */}
                <div className="walker-main-content__body--aboutMeInput">{props.aboutMe}</div>
                <div className="walker-main-content__body--addressLabel">Address:</div>
                <div className="walker-main-content__body--addressInput">{props.address}</div>
                {/* <div className="walker-main-content__body--cityLabel">City:</div> */}
                {/* <div className="walker-main-content__body--cityInput">{props.City}</div> */}
                {/* <div className="walker-main-content__body--stateLabel">State:</div> */}
                <div className="walker-main-content__body--locationInput">{props.City}, {props.State} - {props.zipCode}</div>
                {/* <div className="walker-main-content__body--stateInput">{props.State}</div> */}
                {/* <div className="walker-main-content__body--zipcodeLabel">Zipcode:</div> */}
                {/* <div className="walker-main-content__body--zipcodeInput">{props.zipCode}</div> */}
                {/* <div className="walker-main-content__body--countryLabel">Country:</div> */}
                <div className="walker-main-content__body--countryInput">{props.country}</div>
                <div className="walker-main-content__body--qualificationsLabel">Qualifications:</div>
                {/* <div className="walker-main-content__body--certificationLabel">Certification:</div> */}
                <div className="walker-main-content__body--certificationInput">{props.certification}</div>
                {/* <div className="walker-main-content__body--insuranceLabel">Insurance:</div> */}
                <div className="walker-main-content__body--insuranceInput">{props.insurance}</div>
                {/* <div className="walker-main-content__body--bondLabel">Bond:</div>
                <div className="walker-main-content__body--bondInput">{props.bond}</div> */}
                <div className="walker-main-content__body--bondLabel">Public URL:</div>
                <div className="walker-main-content__body--bondInput">
                <a href={publicURL}>{publicURL}</a></div>
                <div className="walker-main-content__body--servicesLabel">Services:</div>
                <div className="walker-main-content__body--servicesInput">{props.services}</div>
                {/* <div className="walker-main-content__body--availibilityLabel">Availibility:</div>
            <div className="walker-main-content__body--availibilityInput">{props.availibility}</div> */}
            </div>

            

          
        </div>
    );
}

export default WalkerUserInfo;