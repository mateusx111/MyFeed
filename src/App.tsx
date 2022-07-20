import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mateusx111.png',
      name: 'Mateus S. Santos',
      role: 'Web/Mobile Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio portifólio. É um projeto que fiz durante o evento da rocketseat na NLW Return. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-07 11:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Maykebrito',
      role: 'Educator @Roketseat',
    },
    content: [
      { type: 'paragraph', content: 'Faaala Dev 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto na rocketseat para agregar o portifólio de você. É um projeto que fiz para desenvolvermos juntos na NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-06 09:30:00')
  },
]

export function App() {

  return (
    <div>
      <Header />  {/*component Header */}

      <div className={styles.wrapper}>
        <Sidebar />  {/* component sidebar*/}

        <main>
          {posts.map(post => {   // se usar o forEach não tem nehum retorno
            return (
              <Post /* Component post */
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )      // map possibilita o retorno
          })}
        </main>
      </div>
    </div>
  )
}

