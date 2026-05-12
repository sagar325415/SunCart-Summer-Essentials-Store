import ExtraSection from "@/components/ExtraSection";
import HeroSlider from "@/components/HeroSlider";
import Banner from "@/components/homepage/Banner";
import TopThreeCard from "@/components/homepage/TopThreeCard";
import TopBrand from "@/components/TopBrand";



export default function Home() {
  return (
   <div>
       <Banner></Banner>
       <HeroSlider></HeroSlider>
       <TopThreeCard></TopThreeCard>
       <ExtraSection></ExtraSection>
      <TopBrand></TopBrand>
      
   </div>
  );
}
