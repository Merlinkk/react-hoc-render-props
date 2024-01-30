import './App.css';
import LikeImage from './components/HOC/LikeImage';
import LikePost from './components/HOC/LikePost';
import RenderProps from './components/RENDER/RenderWrap';

import LikePost2 from './components/RENDER/LikePost2';
import LikeImage2 from './components/RENDER/LikeImage2';

function App() {
  return (
    <div>
      <h3>HOC Blog</h3>
      <div className='buttons'>
        <LikePost />
        <LikeImage/>
      </div>
      <br />
      <br />
      <h3>Render Props</h3>
      <div className='buttons'>
        <RenderProps
          render={(count, handleCount) => (
            <LikePost2 count={count} handleCount={handleCount} />
          )}
        />
        <RenderProps
          render={(count, handleCount) => (
            <LikeImage2 count={count} handleCount={handleCount} />
          )}
        />
        </div>
    </div>
  );
}

export default App;
