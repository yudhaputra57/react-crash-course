import PostsList from "./components/PostsList"
import MainHeader from "./components/MainHeader"
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function hideModalHandler()
  {
      setIsModalVisible(false);
  }

  function showModalHandler()
  {
      setIsModalVisible(true);
  }

  return(
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isModalVisible={isModalVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  )
}

export default App
