import React from 'react';
import timeago from 'epoch-timeago';
import './Stories.css'


const Stories = ({ state }) => {
  return (
    <>
      {state.map(
        ({ item, author, title, score, comments_count, time, url }) => (
          <tr key={item}>
            <td className="news-item">
              &nbsp; Points {score}
              <i className="fas fa-angle-up fa-7x"></i>
              
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
                Author : {author}
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
                URL :
                {url
                  .replace('http://', '')
                  .replace('https://', '')
                  .split(/[/?#]/)[0]
                  .replace('www.', '')}
              </a>
            </td>
            <React.Fragment >
              <td>
                <i className="fas fa-clock"> {timeago(time * 1000)}</i>
              </td>
              <td>
                <i className="far fa-comment-alt" />{' '}
                <a
                  href={`https://news.ycombinator.com/item?id=${item}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comments {comments_count}
                </a>
              </td>
            </React.Fragment>
            
          </tr>
          
        )
      )}
    </>
  );
};
export default Stories;
