import React from 'react'
import "./featuredinfo.css"
import AWSbutton from './AWSbutton'

export default function featuredInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle"> Kings vs. Bucks</span>
            <div className="featuredMatchupContainer">
                <AWSbutton input_name="Kings vs. Bucks"/>
            </div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle"> Kings vs. Bucks</span>
            <div className="featuredMatchupContainer">
                <AWSbutton input_name="Kings vs. Bucks"/>
            </div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle"> Kings vs. Bucks</span>
            <div className="featuredMatchupContainer">
                <AWSbutton input_name="Kings vs. Bucks"/>
            </div>
        </div>
    </div>
  )
}
