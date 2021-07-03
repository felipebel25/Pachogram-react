import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Button, Img } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({
  id,
  likes = 0,
  src
}) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    Promise.resolve(
      'IntersectionObserver' in window !== false
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        console.log({ isIntersecting })
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })

      observer.observe(ref.current)
    })
  }, [ref])

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <Article ref={ref}>
      {
          show &&
            <>
              <a href={`/detail/${id}`}>
                <ImgWrapper>
                  <Img src={DEFAULT_IMAGE} alt='shi' />
                </ImgWrapper>
              </a>
              <Button type='button' onClick={() => setLocalStorage(!liked)}>
                {
                    liked ? <MdFavorite size='52px' /> : <MdFavoriteBorder size='52px' />
                  }
                {likes} likes
              </Button>
            </>
        }

    </Article>
  )
}
