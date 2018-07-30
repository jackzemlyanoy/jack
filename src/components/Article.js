import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './articlestyle.css';
import { CSSTransitionGroup } from 'react-transition-group'
import ComentsList from './ComentsList';
// import toggleOpen from './decorators/toggleOpen';

class Article extends Component{

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render(){
        const {article, isOpen, toggleOpen} = this.props;
        return(
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <CSSTransitionGroup
                    transitionName='article'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                        {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )}
        getBody(){
            const {article, isOpen} = this.props;
            if(!isOpen)return null;
            return (
                <section>
                    {article.text}
                    <ComentsList comments = {article.comments}/>
                </section>
            )
        }


}
export default Article;