import { createSelector } from 'reselect'

const selectConfig = (state) => state.get('config')

const makeHeroTitle = () => createSelector(
  selectConfig,
  (userState) => userState.getIn(['data', 'field_hero_titre'])
)
const makeHeroSubTitle = () => createSelector(
  selectConfig,
  (userState) => userState.getIn(['data', 'field_hero_sous_titre'])
)

const makeHeroImgUrl = () => createSelector(
  selectConfig,
  (userState) => userState.getIn(['data', 'field_hero_image'])
)

export {
  makeHeroTitle,
  makeHeroSubTitle,
  makeHeroImgUrl
}
