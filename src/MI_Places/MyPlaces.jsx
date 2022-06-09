import React from 'react'
import PlaceCards from './PlaceCards/PlaceCards'
import Canada from '../resources/Places Image/canada.png'
import france from '../resources/Places Image/france.png'
import Germany from '../resources/Places Image/Germany.png'
import Indonesia from '../resources/Places Image/Indonesia.png'
import Spain from '../resources/Places Image/Spain.png'
import UAE from '../resources/Places Image/UAE.png'
import UK from '../resources/Places Image/UK.png'
import US from '../resources/Places Image/US.png'
import Italy from '../resources/Places Image/Italy.png'

import UserImage from '../UserImage'
import MImodal from '../HomeMI/MImodal/MImodal'

function MyPlaces() {
  return (
    <div >
        <PlaceCards img={Canada} dataTar = "#mI-modal-choice"/>
        <MImodal Id="mI-modal-choice" purpose="country-marketPlace-choice" country="USA"/>
        {/* <PlaceCards img={france}/> */}
    </div>
  )
}

export default MyPlaces