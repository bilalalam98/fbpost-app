import * as React from 'react';
import FbImageLibrary from 'react-fb-image-grid'


export default function Pictures({Img}) {
    return (

<FbImageLibrary width={80} images={Img} overlayBackgroundColor='grey' />
    )
}