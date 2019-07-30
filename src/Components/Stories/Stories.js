import React from 'react'
import timeago from 'epoch-timeago'
import './Stories.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faUser, faLink, faClock, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

const Stories = ({ state }) => {
  
  const handleClick = () => {
    this.setState({
      url : 'https://colah.github.io/posts/2015-09-Visual-Information/'
    })
  }
  return (
    <>
      {state.map(
        ({ item, author, title, score, comments_count, time, url }) => (
          <tr key={item}>
            <td className="news-item">
              &nbsp;
                {score} {' '}
              <FontAwesomeIcon icon={faAngleUp} />
              
            </td>
            <td className="news-title">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
              <br />
              <a
                href={`https://news.ycombinator.com/user?id=${author}`}
                target="_blank"
                rel="noopener noreferrer"
              >
              <FontAwesomeIcon icon={faUser} /> {' '} {author}
              </a>
              <br />
              <a
                href={`https://${
                  url
                    .replace('http://', '')
                    .replace('https://', '')
                    .split(/[/?#]/)[0]
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <FontAwesomeIcon icon={faLink} /> {' '}
                {url
                  .replace('http://', '')
                  .replace('https://', '')
                  .split(/[/?#]/)[0]
                  .replace('www.', '')}
              </a> {' '}
              <FontAwesomeIcon icon={faClock} /> {timeago(time * 1000)}
            </td>
            <React.Fragment >
              <td>
                <FontAwesomeIcon icon={faCommentAlt} /> {' '}
                <a
                  href={`https://news.ycombinator.com/item?id=${item}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   {comments_count}
                </a>
              </td>
            </React.Fragment>
            
          </tr>
          
        )
      )}
    </>
  )
}
export default Stories
