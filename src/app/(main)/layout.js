import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";


export default function MainLayout({ children }) {
    return (
        <div className="">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}