import { createSelector } from 'reselect'

const selectConfig = (state) => state.get('home')

const makeHeroDisplay = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'nodeById', 'fieldHomePage', 'entity', 'fieldHeroDisplay']) === 1
)

const makeHeroTitle = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'nodeById', 'fieldHomePage', 'entity', 'fieldHeroTitle'])
)
const makeHeroSubTitle = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'nodeById', 'fieldHomePage', 'entity', 'fieldHeroSubtitle'])
)

const makeHeroImgUrl = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'nodeById', 'fieldHomePage', 'entity', 'fieldHeroImage', 'url'])
)

const makeNews = (pos) => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'nodeQuery', 'entities'])
)

const makeCountdownDisplay = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'nodeById', 'fieldHomePage', 'entity', 'fieldCountdownDisplay']) === 1
)

const makeCountdownDate = () => createSelector(
  selectConfig,
  (homeState) => new Date((homeState.getIn(['data', 'nodeById', 'fieldHomePage', 'entity', 'fieldCountdownDate']) || 0) * 1000).toISOString()
)
const makeCountdownText = () => createSelector(
  selectConfig,
  (homeState) => homeState.getIn(['data', 'nodeById', 'fieldHomePage', 'entity', 'fieldCountdownText'])
)
export {
  makeHeroDisplay,
  makeHeroTitle,
  makeHeroSubTitle,
  makeHeroImgUrl,
  makeNews,
  makeCountdownDisplay,
  makeCountdownDate,
  makeCountdownText
}
