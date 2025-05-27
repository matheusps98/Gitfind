import { useState } from 'react';
import { Header } from '../../components/Header';
import background from "../../assets/background.png";
import ItemList from '../../components/ItemList';


import './styles.css';

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    
    if(newUser.name){
      const {avatar_url, name, bio, login, html_url, blog} = newUser;
      setCurrentUser({avatar_url, name, bio, login, html_url, blog});


      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
      setRepos(newRepos);
    }
  }
}

  return (
    <div className="App">
        <Header />
        <div className='conteudo'>
            <img src={background} alt="Background app" className='background' />
        <div className='info'>
          <div>
            <input name='user'
             onKeyDown={(event) => {
              if (event.key === 'Enter' && user.trim() !== '') {
                handleGetData();
              }
            }}
            value={user} 
            onChange={event => setUser(event.target.value)} 
            placeholder='@username'/>
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser?.name ? (
            <>
            <div className='perfil'>
              <img src={currentUser.avatar_url} alt="Avatar" className='profile' />
              <div>
                <a className='perfil-link' href={currentUser.html_url} target='_blank'><h3>{currentUser.name}</h3></a>
                <span>@{currentUser.login}</span>
    
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
            </>
          ) : null} 


          {repos?.length ? (
          <div className='repositorios'>
            <h4>Repositórios</h4>
            {repos.map(repo => (
            <ItemList 
              key={repo.id}
              title={repo.name} 
              description={repo.description}
              html_url={repo.html_url}/>
            ))}

          </div>
          ) : null}
        </div>
        </div>
    </div>
  );
}

export default App;
