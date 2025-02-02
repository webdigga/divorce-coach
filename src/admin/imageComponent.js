CMS.registerEditorComponent({
  label: 'Image',
  id: 'image',
  fromBlock: match =>
    match && {
      link: match[1],
      image: match[2],
      alt: match[3],
      title: match[4],
      position: match[5],
      width: match[6],
      height: match[7],
      loading: match[8]
    },
  toBlock: function({ image, alt, title, position, width, height, link }, getAsset, fields) {
    const imgTag = `<img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="${position || ''}" width="${width || '600px'}" height="${height || '450px'}" loading="lazy"/>`;
    return link ? `<a href="${link}">${imgTag}</a>` : imgTag;
  },
  toPreview: ({ image, alt, title, position, width, height, link }, getAsset, fields) => {
    const imgTag = `<img src="${image}" alt="${alt}" title="${title}" class="${position}" width="${width || '600px'}" height="${height || '450px'}" loading="lazy"/>`;
    return link ? `<a href="${link}">${imgTag}</a>` : imgTag;
  },
  pattern: /^(?:<a href="(.*?)">)?<img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)" width="(.*?)" height="(.*?)" loading="lazy"\/>(?:<\/a>)?$/s,
  fields: [
    {
      label: 'Picture',
      name: 'image',
      widget: 'image',
      media_library: {
        allow_multiple: false,
      },
      hint: "*Try and make sure this image is 4:3, e.g. 600px x 450px*"
    },
    {
      label: 'Alt Text',
      name: 'alt',
      widget: 'string'
    },
    {
      label: 'Position',
      name: 'position',
      widget: 'select',
      options: ['Left', 'Right', 'Centre']
    },
    {
      label: 'Width',
      name: 'width',
      widget: 'string',
      default: '600px'
    },
    {
      label: 'Height',
      name: 'height',
      widget: 'string',
      default: '450px'
    },
    {
      label: 'Link URL',
      name: 'link',
      widget: 'string',
      required: false
    }
  ]
})
