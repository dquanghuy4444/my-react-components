import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
import { SliderData } from './data/SliderData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Suggestions from './components/Suggestions/Suggestions';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import DragAndDropWithDnD from './components/DragAndDropWithDnD/DragAndDropWithDnD';
import Profiles from './components/SkeletonLoading/Profiles';
import DragAndDropFileWithDropzone from './components/DragAndDropFileWithDropzone/DragAndDropFileWithDropzone';
import InfinityScroll from './components/InfinityScroll/App';
import InfinityScrollWithReactInfiniteScroll from './components/InfinityScrollWithReactInfiniteScroll/App';
import CustomHook from './components/CustomHook/CustomHook';

const links =[
  {
    to:"/",
    text:"Image Slider",
    comp:<ImageSlider slides={ SliderData }></ImageSlider>
  },
  {
    to:"/customhooks",
    text:"Custom Hooks",
    comp:<CustomHook></CustomHook>
  },
  {
    to:"/suggest",
    text:"Input suggestions",
    comp:<Suggestions></Suggestions>
  },
  {
    to:"/draganddrop",
    text:"Drag And Drop",
    comp:<DragAndDrop></DragAndDrop>
  },
  {
    to:"/draganddropwithdnd",
    text:"Drag And Drop (react-beautiful-dnd)",
    comp:<DragAndDropWithDnD></DragAndDropWithDnD>
  },
  {
    to:"/skeletonloading",
    text:"Skeleton Loading",
    comp:<Profiles></Profiles>
  },
  {
    to:"/draganddropfilewithdropzone",
    text:"Drag And Drop File (react-dropzone)",
    comp:<DragAndDropFileWithDropzone></DragAndDropFileWithDropzone>
  },
  {
    to:"/infinityscroll",
    text:"Infinity Scroll",
    comp:<InfinityScroll></InfinityScroll>
  },
  {
    to:"/infinityscrollwithreactinfinitescroll",
    text:"Infinity Scroll (react-infinite-scroll-component)",
    comp:<InfinityScrollWithReactInfiniteScroll></InfinityScrollWithReactInfiniteScroll>
  },
]

function App() {
  return (
    <Router>
      <div className="App">

          <div className="navbar">
            <nav>
              <ul>
                {
                  links.map(link =>(
                    <li>
                    <Link to={ link.to }>
                      { link.text }
                    </Link>
                  </li>
                  ))
                }
              </ul>
            </nav>
          </div>
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <ImageSlider slides={ SliderData }></ImageSlider>
              </Route>
              {
                  links.map(link =>(
                    <Route path={ link.to } exact>
                      {
                        link.comp
                      }
                    </Route>
                  ))
                }
            </Switch>
          </div>
        
      </div>
    </Router>
  );
}

export default App;
