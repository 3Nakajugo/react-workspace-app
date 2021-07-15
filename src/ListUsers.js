import React , { Component} from 'react';

class ListUser extends Component {
  
  render(){
   console.log('props', this.props)
    return (
      
      <div>
      { <ul>
          <h2>Favorite Movies</h2>
          {this.props.profiles.map(profile => {
            const userName = this.props.users[profile.userID].name;
            const favMovieName = this.props.movies[profile.favoriteMovieID].name;

            return (
              <li key={profile.id}>
                <p>{`${userName}\'s favorite movie is "${favMovieName}."`}</p>
              </li>
            );
          })}
        </ul>}
      </div>
      
      
    )
  }
  
  
}

export default ListUser