import GradientLine from "./gradientline";
import Navigation from "./navigation";

const HeaderSection = () => {
  return (
    <section className="text-center mt-20 mb-8">
      <h1 className="text-3xl font-bold">davidoh</h1>
      <h2 className="mt-2">IPA - /ˈdeɪvɪd oʊ/</h2>
      <h2 className="mt-2">
        davidoh2018 <b>[at]</b> gmail <b>[dot]</b> com
      </h2>
      <Navigation />
      <GradientLine />
    </section>
  );
};

export default HeaderSection;
