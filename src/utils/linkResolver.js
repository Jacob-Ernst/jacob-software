export const linkResolver = doc => {
  // URL for a category type

  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`;
  }

  // URL for a page type

  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }

  // Backup for all other types

  return `/doc/${doc.id}`;
};
