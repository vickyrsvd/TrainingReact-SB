import React from 'react'
import propTypes from'prop-types'


const PropTypeEx1 = (props) => {
  return (
    <div>
        <React.Fragment>
            <div align='center'>
                <h1>
                    ReactJs Props Validation
                </h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>
                    <tr>
                    <td>Array</td>
                    <td>{props.propArray}</td>
                    <td>{props.propArray ? "true" :"False"}</td>
                    </tr>
                    <tr>
                    <td>Boolean</td>
                    <td>{props.propBool}</td>
                    <td>{props.propBool ? "true" :"False"}</td>
                    </tr>
                     <tr>
                    <td>Function</td>
                    <td>{props.propFunc(5)}</td>
                    <td>{props.propFunc(5)? "true" :"False"}</td>
                    </tr> 
                    <tr>
                    <td>String</td>
                    <td>{props.propString}</td>
                    <td>{props.propString ? "true" :"False"}</td>
                    </tr>
                    <tr>
                    <td>Number</td>
                    <td>{props.propNumber}</td>
                    <td>{props.propNumber ? "true" :"False"}</td>
                    </tr>
                </table>
            </div>
        </React.Fragment>
      
    </div>
  )
}

export default PropTypeEx1
PropTypeEx1.defaultProps = {
    propArray : [13,22,53,14,95],
    propBool:false,
   propFunc:  function(e) { return e+2 },
    propNumber:1,
    propString:"welcome",

}
PropTypeEx1.propTypes = {
    propArray : propTypes.array,
    propBool:propTypes.bool,
     propFunc:propTypes.func,
    propNumber:propTypes.number,
    propString:propTypes.string,

}
