import showdown from 'showdown';

export async function textToRemark(markdown) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdown.toString());
  return html.toString();
}
