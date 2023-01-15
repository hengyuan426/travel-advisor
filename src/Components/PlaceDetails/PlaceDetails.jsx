import React from "react";
const PlaceDetails = ({place, onClickItem}) => {
    return (
        <div onClick={()=>onClickItem(place)} style={{cursor:"pointer"}}>
            {place.name}
            
        </div>
    );
}
export default PlaceDetails;