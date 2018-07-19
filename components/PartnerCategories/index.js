import React from 'react'
import PropTypes from 'prop-types'
import PartnerLogo from 'components/PartnerLogo'
class PartnerCategories extends React.Component {
  createPartners (categoryId) {
    const buildPartners = []

    for (const index in this.props.partners) {
      const partner = this.props.partners[index]
      if (partner.category.entity.nid === categoryId) {
        buildPartners.push(<div key={partner.nid} className='column is-2'><PartnerLogo imageUrl={partner.image.derivative.url} url={partner.url} /></div>)
      }
    }
    console.log(buildPartners)
    return buildPartners
  }

  createCategories () {
    const buildCategories = []
    for (const index in this.props.categories) {
      const category = this.props.categories[index]
      const buildPartners = this.createPartners(category.nid)
      if (buildPartners.length > 0) {
        buildCategories.push(
          <div key={category.nid} className='category title title-line'>
            <span>{category.title}</span>
            <div className='columns is-multiline is-vcentered is-centered'>
              {buildPartners}
            </div>
          </div>)
      }
    }
    console.log(buildCategories)
    return buildCategories
  }

  render () {
    return <div className='partner-categories has-text-centered'>{this.createCategories()}</div>
  }
}

PartnerCategories.propTypes = {
  categories: PropTypes.array,
  partners: PropTypes.array
}

export default PartnerCategories
