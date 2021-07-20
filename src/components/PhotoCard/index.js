import React from 'react'
import { Article, ImgWrapper, Img, Link } from './styles'
import FavButton from '../FavButton'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useMutationToogleLike } from '../container/ToggleLikeMutation'
const DEFAULT_IMAGE = 'https://i.redd.it/3dgt99qr8ky41.jpg'
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
