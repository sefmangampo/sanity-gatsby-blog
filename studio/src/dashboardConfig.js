export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6152e2bf50f6f000900dc636",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8att72bz",
                  apiId: "8133608b-0c97-4fe1-8e0c-01b7fea8e47e",
                },
                {
                  buildHookId: "6152e2c048ddab0d0bae8ddc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5y2x335i",
                  apiId: "c3d36dfa-f7b9-47bc-8d29-64810cee11d2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sefmangampo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5y2x335i.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
