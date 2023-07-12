import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego Fernandes" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus at minima ea quos. Consequuntur fuga eligendi saepe! Voluptatem iste nemo, animi ea ipsa similique laborum ad in ex illum!" 
          />
          <Post 
            author="Diego Fernandes" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus at minima ea quos. Consequuntur fuga eligendi saepe! Voluptatem iste nemo, animi ea ipsa similique laborum ad in ex illum!" 
          />
        </main>
      </div>
    </div>
  )
}
