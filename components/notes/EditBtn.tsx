export default function EditBtn({ id }) {
  return (
    <button
      onClick={edit}
      className="border-2 border-green-500 hover:bg-green-500 hover:text-gray-50 text-green-500 font-medium py-1 px-4 rounded-full"
    >
      Edit
    </button>
  );
}
