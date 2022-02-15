import React, { useEffect, useState } from "react"
import gifFrames from "gif-frames"


export const Game = () => {
  const [images, setImages] = useState(null);
  useEffect(() => {
    gifFrames({ url: 'https://lh3.googleusercontent.com/pw/AM-JKLWvES54TrtHLdZcWqFQU6kI7VeeOE8EMyzegXw1TtpJZdNpib3FJLzkdx4b1fu38kw7URSMPYCQYSEx1CZJ7cXI0tTjgAw5cZPxSEb9i8AHQfWiomYKLtB2ErpsuG_O0b_61CBALp8iu3cXYPQOhv5KaA=s246-no?authuser=6', frames: 0 }).then(function (frameData) {
      setImages(frameData[0].getImage())
      console.log(images)
      // console.log(frameData[0].getImage());
    });
      // .then(data => console.log(data));
  }, [])
  console.log('weapon')
  // gifFrames({ url: 'https://lh3.googleusercontent.com/pw/AM-JKLWvES54TrtHLdZcWqFQU6kI7VeeOE8EMyzegXw1TtpJZdNpib3FJLzkdx4b1fu38kw7URSMPYCQYSEx1CZJ7cXI0tTjgAw5cZPxSEb9i8AHQfWiomYKLtB2ErpsuG_O0b_61CBALp8iu3cXYPQOhv5KaA=s246-no?authuser=6', frames: 0 }).then(function (frameData) {
  //   console.log(frameData[0].getImage());
  // });
  return (<></>)
}

export default Game