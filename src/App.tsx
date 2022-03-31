import './App.css'
import './styles/index.css'
import 'antd/dist/antd.css'
import Editor from './editor'

function App() {

  return (
    <div className="App">
      <header>
        <div className="flex-center">低代码平台</div>
      </header>
      <section>
       <Editor />
      </section>


    </div>
  )
}

export default App
