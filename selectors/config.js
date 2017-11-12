import { createSelector } from 'reselect'

const selectConfig = (state) => state.get('config')

const makeHeroDisplay = () => createSelector(
  selectConfig,
  (configState) => configState.getIn(['data', 'field_hero_display']) === 'true'
)

const makeHeroTitle = () => createSelector(
  selectConfig,
  (configState) => configState.getIn(['data', 'field_hero_title'])
)
const makeHeroSubTitle = () => createSelector(
  selectConfig,
  (configState) => configState.getIn(['data', 'field_hero_subtitle'])
)

const makeHeroImgUrl = () => createSelector(
  selectConfig,
  (configState) => configState.getIn(['data', 'field_hero_image'])
)

export {
  makeHeroDisplay,
  makeHeroTitle,
  makeHeroSubTitle,
  makeHeroImgUrl
}
