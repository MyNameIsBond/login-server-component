import MyTextArea from '../../../components/notes/edit/MyTextArea';
const defaultData = `# H1
## H2
### H3
Bold	
**bold text**
Italic	
*italicized text*

Blockquote 	
> block quoted

Ordered List	
1. First item
2. Second item
3. Third item

Unordered List	
- First item
- Second item
- Third item

Code	
\`\`\`\ 
// code block
\`\`\`\

Horizontal Rule	---

Link	[title](https://www.example.com)


Image example	![alt text](http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQTBIkxproxJHBsj2ZOkeFr3CYyVJjrfW8qcovw9whTrkRjsqYnBRlprpmyAknfOsug43oiT9iqS9cJe6s)

That is so funny! :joy:

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

~~The world is flat.~~ 

`;

export default function Add({}) {
  return <MyTextArea data={defaultData} />;
}
