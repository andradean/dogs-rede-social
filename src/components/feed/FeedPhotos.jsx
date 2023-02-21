import React from 'react'
import { PHOTOS_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Error from '../helper/Error'
import Loading from '../helper/Loading'
import FeedPhotosItem from './FeedPhotosItem'
import styles from './Feedphotos.module.css'

const FeedPhotos = ({ user, setModalPhoto}) => {
  
  const {data, loading, error, request} = useFetch()
  
  React.useEffect(() => {
    async function fetchPhotos () {
      const {url, options} = PHOTOS_GET({page: 1, total: 3, user})
      const { response, json } = await request(url, options)
      console.log(json)
    }
    
    fetchPhotos()
  }, [request])


  if(error) return <Error error={error}/>
  if(loading) return <Loading />
  if(data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
      <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
      ))}
    </ul>
  )
  else return null
}

export default FeedPhotos
