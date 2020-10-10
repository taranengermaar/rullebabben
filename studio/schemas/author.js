export default {
  name: "author",
  type: "document",
  title: "Forfattere",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn",
    },
    {
      name: "photo",
      type: "image",
      title: "Profilbilde",
    },
    {
      name: "bio",
      type: "text",
      title: "Biografi",
    },
  ],
};
