import { createSelector } from 'reselect'

const selectConfig = (state) => state.get('home')

const makeHeroDisplay = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'fieldHeroDisplay']) === 1
)

const makeHeroTitle = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'fieldHeroTitle'])
)
const makeHeroSubTitle = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'fieldHeroSubtitle'])
)

const makeHeroImgUrl = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'fieldHeroImage', 'url'])
)

export {
  makeHeroDisplay,
  makeHeroTitle,
  makeHeroSubTitle,
  makeHeroImgUrl
}
