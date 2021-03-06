export default {
  name: "activities",
  type: "document",
  title: "Aktiviteter",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
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
      title: "Hjemmeside",
      name: "homepage",
      type: "url",
    },
    {
      name: "price",
      type: "string",
      title: "Pris",
    },
    {
      name: "openinghours",
      type: "string",
      title: "Åpningstider",
    },
    {
      title: "Launchpad Location",
      name: "location",
      type: "geopoint",
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
      type: "richtext",
      title: "Anmeldelse",
    },
    {
      title: "Pros",
      name: "pros",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Cons",
      name: "cons",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
