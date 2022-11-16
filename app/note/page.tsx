export default function Note() {
  return (
    <main className="dark:bg-neutral-900 bg-gray-100 h-full w-full overflow-y-auto">
      <div className="flex flex-col w-full h-full items-center justify-center object-center ">
        <div className="bg-gray-200 dark:bg-neutral-800 rounded-full p-6">
          <h1 className="text-md dark:text-neutral-50">
            Pick from the list or create a note 🎉
          </h1>
        </div>
      </div>
    </main>
  );
}
