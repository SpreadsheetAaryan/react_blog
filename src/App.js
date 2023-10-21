import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Layout from './Layout';
import EditPost from './EditPost';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import useWindowSize from './hooks/useWindowSize';
import useAxios from './hooks/useAxios';
import { useStoreActions } from 'easy-peasy';

function App() {

  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { width } = useWindowSize();

  const { data, fetchError, isLoading } = useAxios('http://localhost:3500/posts');

  useEffect(() => {
    console.log('hi', data);
    setPosts(data); 
  }, [data, setPosts])

  return (

    <Routes>

        <Route path="/" element={
            <Layout 
                width={width}
            />
        }>

            <Route index element={
                <Home 
                    fetchError={fetchError}
                    isLoading={isLoading}
                />
            } />

            <Route path="post">

                <Route index element={<NewPost/>}/>
                <Route path=":id" element={<PostPage/>}/>

            </Route>

            <Route path="edit">

                <Route path=":id" element={<EditPost/>}/>

            </Route>

            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />

        </Route>

    </Routes>

  )
}

export default App