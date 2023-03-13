export default function Footer() {
  return (
    <div>
      <footer className="p-3 text-xs fixed h-full w-full z-0 bottom-0 flex flex-col justify-end dark:darkmode">
        <div className="text-9xl font-extrabold blur text-gray-200 p-5">
          <div>Byul Kim</div>
          <div>Developer</div>
        </div>
      </footer>
      {/* footer 를 모든 페이지에 붙이던가..; */}
      <div className="text-center">&copy; 2023 Byul Kim. All rights reserved.</div>
    </div>
  );
}
