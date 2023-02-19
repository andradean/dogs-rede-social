import React from 'react'
import { PHOTO_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Error from '../helper/Error'
import Loading from '../helper/Loading'
import PhotoContent from '../photo/PhotoContent'
import styles from './Feedmodal.module.css'

const FeedModal = ({photo}) => {
  const {data, error, loading, request} = useFetch()
  
  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])
  
  return (
    <div className={styles.modal}>
      {error && <Error error={error}/>}
      {loading &&  <Loading />}
      {data && <PhotoContent data={data}/>}    
    </div>
  )
}

export default FeedModal
 