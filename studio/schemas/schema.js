// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import post from "./post"
import kebab from "./kebab"
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    post, 
    kebab,
    {
      name: "test",
      type: "document",
      title: "Test",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "excerpt",
          type: "text",
          title: "Excerpt",
        },
        {
          name: "body",
          type: "text",
          title: "Body",
        },
       {
        name: "mainimage",
        type: "image",
        title: "Main image",
        options: {
          hotspot: true
        },
        fields: [
          {
            name: "alternativeText",
            type: "string",
            title: "Alternative text",
            options: {
              isHighlighted: true // <-- make this field easily accessible
            },

          }
        ]

       } 
      ],
    },
    
  ]),
});
