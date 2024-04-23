import Bounded from "@/components/bounded";
import Heading from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";


/**
 * Props for `ContentType`.
 */
export type ContentTypeProps = SliceComponentProps<Content.ContentTypeSlice>;

/**
 * Component for "ContentType" Slices.
 */
const ContentIndex = async ({ 
  slice }: ContentTypeProps): Promise<JSX.Element> => {
  const client = createClient();
  const merchPosts = await client.getAllByType("merch");
  const projects = await client.getAllByType("projects");

  const contentType = slice.primary.content_type || "Graphic Merch"

  const items = contentType === "Graphic Merch" ? merchPosts : projects

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      <ContentList
        items={items}
        contentType={slice.primary.content_type}
        viewMoreText={slice.primary.view_more_text}
        fallbackItemImage={slice.primary.fallback_item_image}
      />
    </Bounded>
  );
};

export default ContentIndex;