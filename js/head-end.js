// Page-specific meta tags and title (defined in the individual HTML file)
if (typeof pageTitle !== 'undefined') {
  document.title = pageTitle;
}

if (typeof pageMeta !== 'undefined') {
  pageMeta.forEach(meta => {
    const metaTag = document.createElement('meta');
    Object.keys(meta).forEach(key => {
      metaTag.setAttribute(key, meta[key]);
    });
    document.head.appendChild(metaTag);
  });
}