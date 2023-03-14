import React from 'react'
import AdTypeButton from './AdTypeButton'

function AdActionButton({action,handleAction, showHide}) {
  return (
      <div className="col-lg-6">
      <button
        onClick={handleAction}
        className="btn btn -primary btn-lg col-12 p-5"
      >
        <span className="h2">{action}</span>
      </button>
      {showHide && (
        <div className="my-1">
          <AdTypeButton action={action} type = 'Land'/>
         < AdTypeButton action={action} type = 'House'/>
        
        </div>
      )}
    </div>
  )
}

export default AdActionButton