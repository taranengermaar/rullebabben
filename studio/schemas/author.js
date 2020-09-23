export default {
  name: "author",
  type: "document",
  title: "Authors",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "photo",
      type: "image",
      title: "Profile image",
    },
    {
      name: "bio",
      type: "text",
      title: "Biography",
    },
  ],
};
