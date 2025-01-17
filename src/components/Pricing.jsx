import Section from "./Section";
import Button from "./Button";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { Gradient } from "./design/Roadmap";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with The Rich Royals"
          title="Unlock Lifetime Trading Success"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center ">
          <Button href="https://api.whatsapp.com/send/?phone=%2B918668417664&text&type=phone_number&app_absent=0">See the full details</Button>
        </div>

      </div>
    </Section>
  );
};

export default Pricing;