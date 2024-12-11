import ImageComponent from "./imageBlock";
import TextBlock from "./textBlock";
import VideoBlock from "./videoBlocj";


const DynamicBlock = ({ type, content }) => {
    switch (type) {
      case "Text":
        return <TextBlock content={content} />;
      case "Image":
        return <ImageComponent content = {content} />;
      case "Video":
        return <VideoBlock content = {content} />;
      case "poll":
        return <PollBlock content={content} />;
      case "quote":
        return <QuoteBlock content={content} />;
      case "relatedContent":
        return <RelatedContentBlock content={content} />;
      default:
        return null;
    }
  };
  
  export default DynamicBlock;
  