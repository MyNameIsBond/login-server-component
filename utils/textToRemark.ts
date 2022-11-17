import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';

export function textToRemark(markdown: string) {
  const converter = new showdown.Converter({
    tables: true,
    strikethrough: true,
    tasklists: true,
    simpleLineBreaks: true,
    ghCodeBlocks: true,
    ghCompatibleHeaderId: true,
    ghMentions: true,
    ghMentionsLink: '',
    emoji: true,
    openLinksInNewWindow: false,
    extensions: [
      showdownHighlight({
        // Whether to add the classes to the <pre> tag, default is false
        pre: true,
        // Whether to use hljs' auto language detection, default is true
        auto_detection: false,
        // Whether to add the classes to the <code> tag, default is false
      }),
    ],
  });
  const html = converter.makeHtml(markdown.toString());
  return html.toString();
}
