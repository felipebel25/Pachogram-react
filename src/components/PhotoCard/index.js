import React from 'react'
import { Article, ImgWrapper, Img, Link } from './styles'
import FavButton from '../FavButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useMutationToogleLike } from '../container/ToggleLikeMutation'
export const PhotoCard = ({
  id,
  likes = 0,
  src
}) => {
  const [show, ref] = useIntersectionObserver()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const { mutation, mutationLoading, mutationError } = useMutationToogleLike()

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }
  console.log(mutation, mutationLoading, mutationError)
  return (
    <Article ref={ref}>
      {
          show &&
            <>
              <Link to={`/detail/${id}`}>
                <ImgWrapper>
                  <Img src={src} alt='shi' />
                </ImgWrapper>
              </Link>
              <FavButton liked={liked} likes={likes} onClick={handleFavClick} />

            </>
        }

    </Article>
  )
}
