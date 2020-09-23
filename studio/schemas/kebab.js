export default {
  name: "kebab",
  type: "document",
  title: "Kebab",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Shop",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      description: "Summary of the result",
    },
    {
      name: "bacground",
      type: "text",
      title: "About",
      description: "Short history and background",
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
      name: "menu",
      type: "string",
      title: "Ordered from the menu",
    },
    {
      name: "improvements",
      type: "text",
      title: "Suggestions for improvements",
    },
  ],
};
