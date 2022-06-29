import React, { useEffect, useState } from 'react';
import { Container, SiteSection } from '..';
import api from '../cards';
import { i18n } from '../multi-lingual/translate/i18n';

const NewsArea = () => {
    const [users, setUsers] = useState();
    const [smash] = useState(4);
    const [newArray, setNewArray] = useState([]);
    const [posts, setPosts] = useState([]);
    const [allposts, setAllposts] = useState([]);
    const [postsSections, setPostsSections] = useState(0);
    const [postSectionsListed, setPosSectionstListed] = useState(0);
   
    const token = process.env.REACT_APP_tokenInstagram;
    useEffect(() => {
        api
          .get(`/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink, timestamp, media_product_type`)
          .then((response) => {
              var array = [];
            for (var i = 0; i < response.data.data.length -1; i = i + smash) {
                array?.push(response.data.data.slice(i, i + smash));
            } 
            setNewArray(array);
            setAllposts(response.data.data);
            setUsers(response.data);
            setPosts(response.data.data.slice(0, 0 + smash));
            setPosSectionstListed(1);
            })
          .catch((err) => {     
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);

    useEffect(()=>{
        setPostsSections(newArray.length);
    }, [newArray])
    
     const addMorePosts = () => {
         const index = Number(postSectionsListed + 1);
         setPosts(posts.concat(newArray[index - 1]))
         setPosSectionstListed(postSectionsListed + 1)
     }

     const seeLess = () => {
        setPosts(newArray[0])
        setPosSectionstListed(1)
     }
    return (
        <SiteSection>
            <Container type='box'>
                <div  id='news'>
                        {posts.map( (post) =>(
                                <article className="news-cardbox" key={post.id}>
                                    <span className="news-channel">INSTAGRAM</span>
                                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                        <div className="image-container">
                                            <img src={post.media_url} alt={post.postTitle} />
                                        </div>
                                        <div className="newscard-body">
                                            <p className='news-date'>{`${post.timestamp.substr(8, 2)}${post.timestamp.substr(4, 4)}${post.timestamp.substr(0, 4)}`}</p>
                                            <p className='news-title'>{post.postTitle}</p>
                                            <p className='news-description'>
                                                {`${post.caption.substr(0, 80)}. . .`}
                                            
                                            </p>
                                        </div> 
                                    </a>
                                </article>
                            ))
                        }
                            { 
                                
                                postSectionsListed < postsSections ?
                                <button className='seemore-button' onClick={() => addMorePosts()}>{i18n.t('news.seemore')}</button>:
                                <button className='seemore-button' onClick={() => seeLess()}>{i18n.t('news.seeless')}</button>
                            }
                        </div>
            </Container> 
                
        </SiteSection>
    )
}

export default NewsArea;
