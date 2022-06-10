import React from 'react'
import "./preview-collection.styles.scss"
import CollectionItem from "../collection-tem/collection.component"

const PreviewCollection  = ({ items, title }) => {
  return (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='collection'>
            {
                items.filter((item,id) => id < 6)
                .map(({ id, ...otherItemProps}) => {
                    <CollectionItem key={id} {...otherItemProps}/>
                })
            })
        </div>
    </div>
  )
}

export default PreviewCollection