export default {
  name: "post",
  type: "document",
  title: "Blogpost",
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
        hotspot: true,
      },
      fields: [
        {
          name: "alternativeText",
          type: "string",
          title: "Alternative text",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
  ],
};
