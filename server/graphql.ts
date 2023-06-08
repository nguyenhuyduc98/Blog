export const discussionGql = (categoryId: string | undefined) => {
  return `
  repository(name: "Blog", owner: "nguyenhuyduc98") {
    discussions(first: 100, categoryId: "${categoryId}") {
      nodes {
        title
        url
        number
        bodyHTML
        bodyText
        createdAt
        lastEditedAt
        author {
          login
          url
          avatarUrl
        }
        labels(first: 10) {
          nodes {
            name
          }
        }
      }
    }
  }
  `;
};
