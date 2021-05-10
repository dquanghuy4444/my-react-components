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
import DragAndDropWithDnD from './components/DragAndDrop-DnD/DragAndDropWithDnD';
import Profiles from './components/SkeletonLoading/Profiles';
import DragAndDropFileWithDropzone from './components/DragAndDropFile-Dropzone/DragAndDropFileWithDropzone';
import InfinityScroll from './components/InfinityScroll/App';
import InfinityScrollWithReactInfiniteScroll from './components/InfinityScroll-ReactInfiniteScroll/App';
import CustomHook from './components/CustomHook/CustomHook';
import GuidedTourWithReactJoyride from './components/GuidedTour-ReactJoyride/GuidedTourWithReactJoyride';
import GeneratePdfFromImageWithJspdf from './components/GeneratePdfFromImage-Jspdf/GeneratePdfFromImageWithJspdf';
import LazyLoadingWithReactLazyLoadImageComp from './components/LazyLoading-ReactLazyLoadImageComp/LazyLoadingWithReactLazyLoadImageComp';
import HighlightTextWithReactHighlightWords from './components/HighlightText-ReactHighlightWords/HighlightTextWithReactHighlightWords';
import HighlightText from './components/HighlightText/HighlightText';
import ConnectionType from './components/ConnectionType/ConnectionType';
import MultiLanguageWithI18Next from './components/MultiLanguage-I18Next/MultiLanguageWithI18Next';
import AutoComplete from './components/AutoComplete/AutoComplete';
import SearchFilter from './components/SearchFilter/SearchFilter';
import ImageZoomWithReactZoomPanPinch from './components/ImageZoom-ReactZoomPanPinch/ImageZoomWithReactZoomPanPinch';
import PlayAndPauseGifWithReactGifPlayer from './components/PlayAndPauseGif-ReactGifPlayer/PlayAndPauseGifWithReactGifPlayer';
import ParallaxTiltWithReactParallaxTilt from './components/ParallaxTilt-ReactParallaxTilt/ParallaxTiltWithReactParallaxTilt';
import DatePickerWithRcDatePicker from './components/DatePicker-RcDatePicker/DatePickerWithRcDatePicker';
import ContextMenu from './components/ContextMenu/ContextMenu';
import RizingImage from './components/RizingImage/RizingImage';
import ConvertImagesIntoText from './components/ConvertImagesIntoText/ConvertImagesIntoText';
import EmailJS from './components/EmailJS/EmailJS';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ScrollIndicatorBar from './components/ScrollIndicatorBar/ScrollIndicatorBar';
import CustomMentionEditor from './components/EditorMention-DraftJS/EditorMention';
import DarkMode from './components/DarkMode/DarkMode';
import LazyLoading from './components/LazyLoading/LazyLoading';
import CloseWhenClickOutside from './components/CloseWhenClickOutside/CloseWhenClickOutside';
import EventBus from './components/EventBus/EventBus';
import DropZone from './components/DropZone/DropZone';


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
    to:"/autocomplete",
    text:"Auto Complete",
    comp:<AutoComplete></AutoComplete>
  },
  {
    to:"/searchfilter",
    text:"Search Filter",
    comp:<SearchFilter></SearchFilter>
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
  {
    to:"/guidedtourwithreactjoyride",
    text:"Guided Tour (react-joyride)",
    comp: <GuidedTourWithReactJoyride></GuidedTourWithReactJoyride>
  },
  {
    to:"/highlighttext",
    text:"Highlight Text ",
    comp: <HighlightText></HighlightText>
  },
  {
    to:"/highlighttextwithreacthighlightwords",
    text:"Highlight Text (react-highlight-words)",
    comp: <HighlightTextWithReactHighlightWords></HighlightTextWithReactHighlightWords>
  },
  {
    to:"/lazyloadingwithreactlazyloadimagecomp",
    text:"Lazy Loading (react-lazy-loading-component)",
    comp: <LazyLoadingWithReactLazyLoadImageComp></LazyLoadingWithReactLazyLoadImageComp>
  },
  {
    to:"/connectiontype",
    text:"Connection Type",
    comp: <ConnectionType></ConnectionType>
  },
  {
    to:"/generatepdfromImagewithjspdf",
    text:"Generate Pdf From Image (Jspdf)",
    comp: <GeneratePdfFromImageWithJspdf></GeneratePdfFromImageWithJspdf>
  },
  {
    to:"/multilanguagewithi18n",
    text:"Multi Language (i18next)",
    comp: <MultiLanguageWithI18Next></MultiLanguageWithI18Next>
  },
  {
    to:"/imagezoomwithreactzoompanpinch",
    text:"Image Zoom (react-zoom-pan-pinch)",
    comp: <ImageZoomWithReactZoomPanPinch></ImageZoomWithReactZoomPanPinch>
  },
  {
    to:"/playandpausegifwithreactgifplayer",
    text:"Play and pause gif (react-gif-player)",
    comp: <PlayAndPauseGifWithReactGifPlayer></PlayAndPauseGifWithReactGifPlayer>
  },
  {
    to:"/parallaxtiltwithreactparallaxtilt",
    text:"Parallax Tilt (react-parallax-tilt)",
    comp: <ParallaxTiltWithReactParallaxTilt></ParallaxTiltWithReactParallaxTilt>
  },
  {
    to:"/datepickerwithrcdatepicker",
    text:"Date Picker (rc-datepicker)",
    comp: <DatePickerWithRcDatePicker></DatePickerWithRcDatePicker>
  },
  {
    to:"/contextmenu",
    text:"Custom right click ( Context menu )",
    comp: <ContextMenu></ContextMenu>
  },
  {
    to:"/rizingimage",
    text:"Rizing image",
    comp: <RizingImage></RizingImage>
  },
  {
    to:"/convertimagesintotext",
    text:"Convert image to text",
    comp: <ConvertImagesIntoText></ConvertImagesIntoText>
  },
  {
    to:"/emailjs",
    text:"EmailJS",
    comp: <EmailJS></EmailJS>
  },
  {
    to:"/customcursor",
    text:"Custom Cursor",
    comp: <CustomCursor></CustomCursor>
  },
  {
    to:"/scrollindicatorbar",
    text:"Scroll Indicator Bar",
    comp: <ScrollIndicatorBar></ScrollIndicatorBar>
  },
  {
    to:"/editormention",
    text:"Editor Mention (draft-js)",
    comp: <CustomMentionEditor></CustomMentionEditor>
  },
  {
    to:"/darkmode",
    text:"Dark Mode",
    comp: <DarkMode></DarkMode>
  },
  {
    to:"/lazyloading",
    text:"Lazy Loading",
    comp: <LazyLoading></LazyLoading>
  },
  {
    to:"/closewhenclickoutside",
    text:"Close When Click Outside",
    comp: <CloseWhenClickOutside></CloseWhenClickOutside>
  },
  {
    to:"/eventbus",
    text:"Event Bus",
    comp: <EventBus></EventBus>
  },
  {
    to:"/dropzone",
    text:"Drop Zone",
    comp: <DropZone></DropZone>
  },
]

const linksTemp = links.sort(function(a,b){
  return a.text.localeCompare(b.text);
})

function App() {
  return (
    <Router>
      <div className="App">
          <div className="navbar">
            <nav>
              <ul>
                {
                  linksTemp.map(link =>(
                    <Link to={ link.to }>
                      <li>
                        { link.text }
                      </li>
                    </Link>

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