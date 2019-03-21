import React, { Component } from 'react'

export class Travel extends Component {
  render() {
    const data = this.props.data
    return (
      <div>
        <div className="card m-1" style={{ width: "300px" }}>
          <img src={data.photo} className="card-img-top" alt="Country Thumbnail"></img>
          <div className="card-body p-0">
            <ul className="list-unstyled text-left p-2 m-0" style={{ fontSize: "16px" }}>
              <li>Destination: {data.destination}</li>
              <li>Country: {data.country}</li>
              <li>Distance: {data.distance}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Travel
