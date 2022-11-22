import { textToRemark } from '../../../utils/textToRemark';

export default function MdPreview({ value }: { value: string }) {
  const content = textToRemark(value);
  return (
    <div
      className="prose-sm dark:prose-invert prose max-w-md overflow-x-auto w-screen p-10"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
