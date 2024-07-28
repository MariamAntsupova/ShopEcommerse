import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.
            </p>
            <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. 
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox