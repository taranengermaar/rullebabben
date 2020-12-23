export default {
  name: "kebab",
  type: "document",
  title: "Kebab",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Restaurant",
      validation: (Rule) => Rule.required().warning("Husk tittel!"),
    },
    {
      title: "Hjemmeside",
      name: "homepage",
      type: "url",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Ingress",
    },
    {
      title: "Terningkast",
      name: "rating",
      type: "rating",
    },
    {
      title: "Prisnivå",
      name: "string",
      type: "string",
    },
    {
      name: "bacground",
      type: "text",
      title: "Om restauranten",
    },
    {
      name: "mainimage",
      type: "image",
      title: "Bilde",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alternativeText",
          type: "string",
          title: "Bildetekst",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      name: "menu",
      type: "string",
      title: "Bestilt fra menyen",
    },
    {
      name: "body",
      type: "richtext",
      title: "Anmeldelse",
    },
    {
      title: "Author",
      name: "authors",
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
    },
  ],
};
