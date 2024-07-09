import '../style.css'

export default function Main (props){
    return (
        <div className="main_comp">
            <div className = "main_image">
                <img className = "cover_images"src = {`images/${props.coverImage}`} width = {210} height = {290} />
            </div>
            <div className = "main_texts">
            <p> <span className='country_name'><img src='images/country.jfif' width={30} height={25}/> {props.country}</span>
            <span className = "google_map"><a href= {props.googleMap} >View in Google Map</a> </span>
            </p>
            <h1>{props.title}</h1> 
            <p>
                <span className='location_name'><img src='images/location.jfif' width={30} height={20}/>  {props.location}</span></p>
                
                <b><p><span>From {props.startDate}</span>
                <span> - {props.endDate}</span></p></b>
                <p><span>{props.Discription}</span>
            </p>
            </div>
           
        </div>
    )
}