import { CONTACT } from "../../constants";
import { WhatsAppIcon } from "../icons";
import { Button, Container } from "../ui";

const VideosCTA = () => (
  <section className="bg-white py-16">
    <Container>
      <div className="rounded-2xl bg-linear-to-r from-[#1a5f2a] to-[#0d3d16] p-8 md:p-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="flex-1">
            <h2 className="font-display mb-4 text-2xl font-bold text-white md:text-3xl">
              Interested in our products?
            </h2>
            <p className="text-white/80">
              Contact us for competitive quotes on bulk orders. We deliver
              quality foodstuff across the UAE and beyond.
            </p>
          </div>
          <Button
            as="a"
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            WhatsApp us
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default VideosCTA;
