import Accordian from "./components/accordian/";
import ColorGen from "./components/colorgen";
import Stars from "./components/stars";
import Slider from "./components/slider";
import LoadMore from "./components/load-more";
import TreeView from "./components/nested";
import data from "./components/nested/data"

function Hello() {

  return <>
  <Accordian/>
  <ColorGen/>
  <Stars/>
  <Slider/>
  <LoadMore/>
  <TreeView menu={data}/>
    </>
}

export default Hello;