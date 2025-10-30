/**
 * @param {string} basePath
 * @param {Object} resource
 * @returns {Object}
 */
function generateLinks(basePath, resource = null) {
  const links = {
    collection: { href: basePath }
  };

  if (resource && resource.id) {
    links.self = { href: `${basePath}/${resource.id}` };
    links.update = { href: `${basePath}/${resource.id}` };
    links.delete = { href: `${basePath}/${resource.id}` };
  }

  return links;
}

function attachHateoasToItem(item, basePath) {
  return { ...item, _links: generateLinks(basePath, item) };
}

function attachHateoasToCollection(collection, basePath, meta = null) {
  const dataWithLinks = collection.map(item => attachHateoasToItem(item, basePath));
  if (meta) {
    return { meta, data: dataWithLinks, _links: { self: { href: basePath } } };
  }
  return dataWithLinks;
}

module.exports = { generateLinks, attachHateoasToItem, attachHateoasToCollection };
