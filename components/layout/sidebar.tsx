export default function Sidebar() {
  return (
    <>
      {/** 모바일에서는 drawer */}
      <div className="p-4 md:hidden">drawer</div>
      {/** pc에서는 sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-gray-50 p-6 md:flex dark:bg-gray-900">
        sidebar
      </aside>
    </>
  );
}
