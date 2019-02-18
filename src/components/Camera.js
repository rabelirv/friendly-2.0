import React from 'react'
import Webcam from 'react-webcam'

class Camera extends React.Component{
  state ={
    imageData:null,
    image_name:"",
    saveImage:false
  }

  setRef = (webcam)=>{
    this.webcam = webcam
  }

  capture = ()=>{
    const imageSrc = this.webcam.getScreenshot()
    this.setState({
      imageData: imageSrc
    })
    this.props.grabSelfie(imageSrc)
  }


  render(){
    let selfies = this.props.selfieArr.map(selfie=>{
      return <img src={selfie} alt='selfie'/>
    })
    const videoConstraints ={
      width: 1280,
      height:720,
      facingMode: 'user',
    }
    return(
      <div>
      <Webcam
      audio={false}
      height={350}
      ref={this.setRef}
      screenshotFormat="image/jpeg"
      width={350}
      videoConstraints={videoConstraints}
      />
      <button onClick={this.capture}>Take Picture!</button>
      {selfies}
      </div>
    )
  }
}

export default Camera
