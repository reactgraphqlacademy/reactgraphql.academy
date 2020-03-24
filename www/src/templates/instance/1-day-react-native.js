import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactNative3Day'
import {
  REACT_WORKSHOP,
  ADVANCED_REACT,
  TRAINING_TYPE_WORKSHOP,
} from 'src/config/data'

export const crossSellTypes = [ADVANCED_REACT, REACT_WORKSHOP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingType={TRAINING_TYPE_WORKSHOP}
    crossSellTypes={crossSellTypes}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    typeOfTraining="3-day React Native workshop"
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export default Page
