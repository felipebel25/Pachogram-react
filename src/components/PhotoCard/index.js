import React from 'react'
import { Article, ImgWrapper, Img, Link } from './styles'
import FavButton from '../FavButton'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useMutationToogleLike } from '../container/ToggleLikeMutation'
const DEFAULT_IMAGE = 'https://static.platzi.com/media/user_upload/1-529ffe30-c9e7-4b5d-a340-f2b84b2aa145.jpg'
export const PhotoCard = ({
  id,
  liked,
  likes = 0,
  src = DEFAULT_IMAGE
}) => {
  const [show, ref] = useIntersectionObserver()

  const { mutation, mutationLoading, mutationError } = useMutationToogleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  console.log(mutation, mutationLoading, mutationError)
  return (
    <Article ref={ref}>
      {
        show &&
          <>
            {mutationError && <h1>hey Registrate o inicia sesion</h1>}

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
