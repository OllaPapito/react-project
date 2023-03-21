import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css'


export function App() {
  return (
  <div>
    <Header
    
    />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post 
          author="Fulano"
          content="da da da re"
        />
        <Post 
          author="Ful"
          content="dedede"
        />
      </main>
    </div>
  </div>
  )
}

