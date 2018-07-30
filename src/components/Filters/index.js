import React,{Component} from 'react'
import Data from './Data'
import SelectFilter from './Select'

class Filters extends Component {
    render(){
        return(
            <div>
                <SelectFilter articles={this.props.articles}/>
                <Data />
            </div>
        )
    }
}
export default Filters
