import React from "react";
export default function Cars() {
    const empData = [
        {
        Name:"Lamborghini",
        Location:"USA",
        URL:"https://pixabay.com/illustrations/ai-generated-lamborghini-car-8237688/"
        },{Name:"nexas",
        Location:"china",
        URL:"https://www.pixelstalk.net/wp-content/uploads/2016/06/Lamborghini-Desktop-HD-Car-Wallpapers.jpg"},
        {Name:"Nission",Location:"India",URL:"https://www-asia.nissan-cdn.net/content/dam/Nissan/AU/Images/vehicles/Patrol/overview/my20/patrol-banner-dusk-headlights-edited-3000x1500.jpg"}
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">URL</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.Name}</td>
                    <td>{x.Location}</td>
                    <td>{x.URL}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }