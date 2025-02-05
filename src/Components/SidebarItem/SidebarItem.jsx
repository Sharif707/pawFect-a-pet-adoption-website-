const SidebarItem = ({ icon, text, isOpen }) => (
  <div className="flex items-center gap-4 p-3 hover:bg-gray-800 cursor-pointer transition-all">
    <span className="text-xl">{icon}</span>
    <span className={`transition-all ${isOpen ? "block" : "hidden"} md:block`}>
      {text}
    </span>
  </div>
);
export default SidebarItem;
