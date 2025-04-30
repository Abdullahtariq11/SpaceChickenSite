import BurgerSpecialsSection from "@/components/ui/BurgerSpecialSection";
import FooterSection from "@/components/ui/FooterSection";

import HeroSection from "@/components/ui/HeroSection";
import LoadingSection from "@/components/ui/LoadingSection";
import MenuSection from "@/components/ui/MenuSection";
import Navbar from "@/components/ui/Navbar";
import OrderSection from "@/components/ui/OrderSection";
import ReviewsSection from "@/components/ui/ReviewSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OrderSection />
      <MenuSection />
      <BurgerSpecialsSection />
      <ReviewsSection />
      <LoadingSection />
      <FooterSection />
    </>
  );
}
