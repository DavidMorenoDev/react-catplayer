import React from 'react'
import AlbumContainer from '../components/AlbumsContainer/AlbumsContainer'
import ArtistsContainer from '../components/ArtistContainer/ArtistsContainer'
import GenresContainer from '../components/GenresContainer/GenresContainer'
import Menu from '../components/Menu/Menu'
import PlaylistContainer from '../components/PlaylistContainer/PlaylistContainer'
import TracksContainer from '../components/TracksContainer/TracksContainer'

const Homepage = () => {
  return (
    <>
    <h1>HomePage</h1>
<Menu/>

    <PlaylistContainer/>
    <AlbumContainer/>
    {/* <TracksContainer/> */}
    <ArtistsContainer/>


<GenresContainer/>

    </>
  )
}

export default Homepage
