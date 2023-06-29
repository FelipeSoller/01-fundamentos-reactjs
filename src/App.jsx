// JXS = JavaScript + XML (HTML)

import { Post } from "./Post"
import { Header } from "./components/Header"

export function App() {

  return (
    <div>
      <Header />
      <Post
        author="Felipe Soller"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi nemo dicta cumque ea quisquam delectus. Harum sunt porro iure odit dolores quos voluptatibus nobis earum eum deserunt, praesentium veritatis."
      />
      <Post
        author="Diego Fernandes"
        content="Um novo post muito legal"
      />
    </div>
  )
}

