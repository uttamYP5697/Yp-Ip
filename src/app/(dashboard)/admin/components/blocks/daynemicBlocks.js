import ImageComponent from "./imageBlock";
import VideoBlock from "./videoBlocj";


const DynamicBlock = ({ type, content }) => {
    console.log("🚀 ~ DynamicBlock ~ type:", type)
    switch (type) {
      case "text":
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
  