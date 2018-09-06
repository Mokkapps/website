export const getAsset = (edges, imageName) => {
  return edges
    .map(e => e.node)
    .filter(node => node.childImageSharp)
    .find(node => node.childImageSharp.sizes.src.includes(imageName));
};

export const getFormattedDate = dateString => {
  const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return new Date(dateString).toLocaleString('en-US', dateOptions);
};
