/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

interface FAQProps {
  question: string;
  answer: string | ReactNode;
}

const FAQList: FAQProps[] = [
  {
    question: "Which OpeanAI models are used in GPToid?",
    answer: <ul className="list-disc pl-5 space-y-2">
      <li>GPToid uses <strong>GPT-4o mini</strong> as a default text model.</li>
      <li><strong>GPT-4o</strong> is used as a premium model (you need to buy 🍥 gptokens to access it).</li>
      <li>Images are generated using <strong>DALL-E 3</strong>.</li>
    </ul>
  },
  {
    question: "Can I use GPToid for free?",
    answer: <>Yes. The free tier includes 10 daily requests to <strong>GPT-4o mini</strong>, the monthly limit is 150. Also, 3 <strong>DALL-E 3</strong> images can be generated for free every week.</>
  },
  {
    question: "Is GPToid friendly for newcomers?",
    answer: <>Yes. Totally! There is a build-in tutorial. Every new user recieves a coupon for a small 🍥 gptoken bundle. Also, you receive a reward for every invited user!</>
  },
  {
    question: "What if OpenAI releases a new model?",
    answer: <>The models used by the bot are regularly updated. When <strong>OpenAI</strong> releases a new better model, it's updated in 1-2 days in the bot.</>
  },
  {
    question: "What are 🍥 gptokens?",
    answer: <>🍥 Gptokens are a special GPToid currency used to access premium models (<strong>GPT-4o</strong> and <strong>DALL-E 3</strong>). 🍥 1 gptoken equals $0.02.</>
  },
  {
    question: "Are there paid services?",
    answer: <>If the free tier is not enough, you can buy product bundles in the bot. There are two product groups: <strong>GPT-4o mini</strong> request bundles and 🍥 gptoken bundles that give access to <strong>GPT-4o</strong> and <strong>DALL-E 3</strong>. All products do not expire. The 🍥 gptoken cost is fixed for image generation and depends on the text model and the actual token size of a request/response to the OpenAI API.</>
  },
  {
    question: "Which languages are supported?",
    answer: "English and Russian UI languages are supported. The language is determined by the Telegram UI settings. In any case, you can speak with AI using any language."
  },
  {
    question: "Which payment methods are available?",
    answer: "Product bundles can be bought with rubles (from Russia) and with Telegram Stars, that can be bought with any local currency."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`value-${index + 1}`}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
