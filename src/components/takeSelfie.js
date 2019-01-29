import React from 'react'
import ReactCamera from 'simple-react-camera'


class takeSelfie extends React.Component {

  capture() {
    this.camera.snapshot()
      .then(data => {
        /* data: string (base-64-jqeg)
        Process your data here*/
        console.log(data)
      })
      .catch(console.error)
  }
  render(){
    return(
      <div>
        <ReactCamera
          classNames={'yourCssClassHere'}
          ref={camera => this.camera = camera}
          width={800}
          height={500} />
        <button onClick={this.capture}>captured</button>
      </div>
    )
  }
}
export default takeSelfie
