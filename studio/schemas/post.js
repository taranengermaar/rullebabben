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
      title: "Author",
      name: "authors",
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
    },
    {
      title: "Aktivitet",
      name: "activityreference",
      type: "array",
      of: [{ type: "reference", to: { type: "activities" } }],
    },
    {
      title: "Kebab",
      name: "kebabreference",
      type: "array",
      of: [{ type: "reference", to: { type: "kebab" } }],
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
    {
      name: "body",
      type: "text",
      title: "Body",
    },
  ],
};
