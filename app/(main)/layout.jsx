import Sidebar from "@/components/sidebar/sidebar";

function MainLayout({ children }) {
    return (
        <div className="bg-[#E3DFD9]">
            <Sidebar />
        </div>
    )
}

export default MainLayout